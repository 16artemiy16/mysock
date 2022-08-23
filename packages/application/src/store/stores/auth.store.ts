import { createSlice } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';

import { UserJWTDataI } from '../../models/auth.interfaces';

export interface AuthStateI {
  userData: UserJWTDataI | null;
}

interface AuthReducersI extends SliceCaseReducers<AuthStateI> {
  setUserData: (state: AuthStateI, action: { type: string, payload: UserJWTDataI | null }) => void;
}

export const authSlice = createSlice<AuthStateI, AuthReducersI, 'auth'>({
  name: 'auth',
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, { payload }) => {
      state.userData = payload;
    },
  },
});

export default authSlice.reducer;
