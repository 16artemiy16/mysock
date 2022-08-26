import { Dispatch } from '@reduxjs/toolkit';
import jwt_decode from "jwt-decode";
import authService from '../../services/auth.service';
import { authActions } from './auth.store';
import { UserJWTDataI } from '../../models/auth.interfaces';

export const login = (email: string, password: string) => {
  // TODO: we have any here!
  return async (dispatch: Dispatch, getState: any) => {
    dispatch(authActions.setIsLoginLoading(true));
    try {
      const token = await authService.signIn(email, password);
      const decodedUser = jwt_decode<UserJWTDataI>(token);
      dispatch(authActions.setUserData(decodedUser));
      dispatch(authActions.setSignInErrorMsg(undefined));
    } catch (e) {
      const { msg } = e as any;
      dispatch(authActions.setSignInErrorMsg(msg));
    } finally {
      dispatch(authActions.setIsLoginLoading(false));
    }
  }
}
