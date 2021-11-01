import firestore, { serverTimestamp } from 'firebase/firestore';
import auth, { getAdditionalUserInfo } from 'firebase/auth';
import {
  collection,
  query,
  where,
  getDocs,
  writeBatch,
  doc,
  getDoc,
  increment
} from 'firebase/firestore';
import { isEmpty } from 'lodash';
import { sprintf } from 'sprintf-js';

import { User, blankUser } from '../Model/user';
import { collectionName } from './constants';

const writeUser = async (
  db: firestore.Firestore,
  firebaseUser: auth.User,
  credential: auth.UserCredential
) => {
  const id = firebaseUser.uid;
  const { displayName } = firebaseUser;
  const photoUrl = firebaseUser.photoURL;
  let providerUid = '';
  let screenName = '';
  let description = '';

  const added = getAdditionalUserInfo(credential);
  if (added) {
    if (added.username) {
      screenName = added.username;
    }
    if (added.profile) {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      providerUid = (added.profile as any).id_str;
      description = (added.profile as any).description || '';
      /* eslint-enable */
    }
  }

  if (!providerUid || !screenName) {
    throw new Error('Invalid credential information.');
  }

  // resolve screenname duplication
  const screenNameRef = collection(db, collectionName.users);
  const q = query(screenNameRef, where('screenName', '==', screenName));
  const result = await getDocs(q);
  if (result.size) {
    const rnd = Math.floor(Math.random() * 10000);
    screenName = `${screenName}${sprintf('%04d', rnd)}`;
  }

  let theUser: User | null = null;
  const batch = writeBatch(db);
  const userRef = doc(db, collectionName.users, id);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    const user = userDoc.data() as User;
    const diff: Partial<User> = {};
    if (user.description !== description) {
      diff.description = description;
    }
    if (user.displayName !== displayName) {
      diff.displayName = displayName;
    }
    if (user.photoUrl !== photoUrl) {
      diff.photoUrl = photoUrl;
    }
    if (!isEmpty(diff)) {
      batch.update(userDoc.ref, {
        ...diff,
        updatedAt: serverTimestamp()
      });
    }
    theUser = { ...diff, ...user, id: userDoc.id };
  } else {
    const user: User = {
      ...blankUser,
      providerUid,
      screenName,
      displayName,
      description,
      photoUrl
    };
    batch.set(userDoc.ref, {
      ...user,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    theUser = { ...user, id: userDoc.id };

    const counterRef = doc(
      db,
      collectionName.userCounter,
      collectionName.userCounter
    );
    batch.set(
      counterRef,
      {
        count: increment(1),
        updatedAt: serverTimestamp()
      },
      { merge: true }
    );
  }
  await batch.commit();

  return theUser;
};

export default writeUser;
