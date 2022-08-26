import { AuthStateI } from './auth.store';
import { AppStateI } from '../typization';

export const authSelect = (selector: (state: AuthStateI) => any) => {
  return (state: AppStateI) => selector(state.auth);
};

export const selectIsAuthed = authSelect((state) => !!state.userData);
export const selectAuthedUser = authSelect((state) => state.userData);
export const selectIsSignInLoading = authSelect((state) => state.isLoginLoading);
export const selectSignInErrorMsg = authSelect((state) => state.signInErrorMsg);
