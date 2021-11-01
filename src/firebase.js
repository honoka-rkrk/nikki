import firebase, { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBiZhAIhIIdNBMgld9_F7hFh0rBfuSEz-Y',
  authDomain: 'drawingmemory-3bcfe.firebaseapp.com',
  projectId: 'drawingmemory-3bcfe',
  storageBucket: 'drawingmemory-3bcfe.appspot.com',
  messagingSenderId: '549654553308',
  appId: '1:549654553308:web:94883330236e3bc83aca19',
  measurementId: 'G-5RGLK4PEV3'
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);
