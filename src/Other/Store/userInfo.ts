import { createSlice } from '@reduxjs/toolkit';
import firestore from 'firebase/firestore';

export type UserInfo = {
  id?: string;
  screenName: string;
  displayName: string | null;
  description: string | null;
  photoUrl: string | null;
  provider: string;
  providerUid: string;
  createdAt: firestore.Timestamp | null;
  updatedAt: firestore.Timestamp | null;
};

type State = {
  userInfo: UserInfo | null;
};

const initialState: State = {
  userInfo: null
};

const slice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      return Object.assign({}, state, { usetInfo: action.payload });
    }
  }
});

export default slice.reducer;
export const { setUserInfo } = slice.actions;
