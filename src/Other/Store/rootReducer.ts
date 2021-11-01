import { combineReducers } from '@reduxjs/toolkit';
import userInfo from './userInfo';

const rootReducer = combineReducers({
  userInfo: userInfo
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
