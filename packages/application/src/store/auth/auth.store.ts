import { createSlice } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';

import { UserJWTDataI } from '../../models/auth.interfaces';

export interface AuthStateI {
  userData: UserJWTDataI | null;
  isLoginLoading: boolean;
  signInErrorMsg?: {
    login?: string;
    password?: string;
    general?: string;
  };
}

interface AuthReducersI extends SliceCaseReducers<AuthStateI> {
  setUserData: (state: AuthStateI, action: { type: string, payload: UserJWTDataI | null }) => void;
  setIsLoginLoading: (state: AuthStateI, action: { type: string, payload: boolean }) => void;
  setSignInErrorMsg: (state: AuthStateI, action: { type: string, payload: { login?: string, password?: string; genera?: string } | undefined }) => void;
}

export const authSlice = createSlice<AuthStateI, AuthReducersI, 'auth'>({
  name: 'auth',
  initialState: {
    userData: null,
    isLoginLoading: false,
    signInErrorMsg: undefined,
  },
  reducers: {
    setUserData: (state, { payload }) => {
      state.userData = payload;
    },
    setIsLoginLoading: (state, { payload }) => {
      state.isLoginLoading = payload
    },
    setSignInErrorMsg: (state, { payload }) => {
      state.signInErrorMsg = payload;
    }
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
