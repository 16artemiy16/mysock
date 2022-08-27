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
  signInError: (state: AuthStateI, action: { type: string, payload: { login?: string, password?: string; genera?: string } | undefined }) => void;
  signInStart: (state: AuthStateI) => void;
  signInSuccess: (state: AuthStateI, action: { type: string, payload: UserJWTDataI | null }) => void;
}

export const authSlice = createSlice<AuthStateI, AuthReducersI, 'auth'>({
  name: 'auth',
  initialState: {
    userData: null,
    isLoginLoading: false,
    signInErrorMsg: undefined,
  },
  reducers: {
    signInStart: (state) => {
      state.signInErrorMsg = undefined;
      state.isLoginLoading = true;
    },
    signInSuccess: (state, { payload }) => {
      state.userData = payload;
      state.isLoginLoading = false;
    },
    signInError: (state, { payload }) => {
      state.signInErrorMsg = payload;
      state.isLoginLoading = false;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
