import firestore, { doc, getDoc } from 'firebase/firestore';

import { User } from '../Model/user';
import { collectionName } from './constants';

const findUser = async (db: firestore.Firestore, id: string) => {
  let theUser: User | null = null;
  const docRef = doc(db, collectionName.users, id);
  const userDoc = await getDoc(docRef);

  if (userDoc.exists()) {
    const user = userDoc.data() as User;
    theUser = { ...user, id: userDoc.id };
  }

  return theUser;
};

export default findUser;
