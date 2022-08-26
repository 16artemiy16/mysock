import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthedUser,
  selectIsAuthed,
  selectIsSignInLoading,
  selectSignInErrorMsg
} from '.';
import * as authThunks from './auth.thunks';

const useAuthSandbox = () => {
  const dispatch = useDispatch();
  const signInErrors = useSelector(selectSignInErrorMsg);
  const getSignInError = (field: 'email' | 'password' | 'general'): string | undefined => {
      return signInErrors ? signInErrors[field] : undefined;
  };
  return {
    // Selectors
    isAuthed: useSelector(selectIsAuthed),
    currentUser: useSelector(selectAuthedUser),
    isSignInLoading: useSelector(selectIsSignInLoading),
    signInErrors,
    getSignInError,

    // Thunks
    signIn: (email: string, password: string) => dispatch(authThunks.login(email, password) as any),
  }
};

export default useAuthSandbox;
