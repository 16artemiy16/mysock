import { takeLatest, call, put } from 'redux-saga/effects';
import authService from '../../services/auth.service';
import jwt_decode from 'jwt-decode';
import { UserJWTDataI } from '../../models/auth.interfaces';
import { authActions } from './auth.store';
import tokenStorage from '../../services/token-storage.service';

const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';

function* signIn({ payload }: any): any {
  const { email, password } = payload;
  yield put(authActions.signInStart())
  try {
    const token = yield call(authService.signIn, email, password);
    const decoded = jwt_decode<UserJWTDataI>(token);
    tokenStorage.set(token);
    yield put(authActions.signInSuccess(decoded))
  } catch (e: any) {
    yield put(authActions.signInError(e.msg))
  }
}

export const signInRequest = (email: string, password: string) => ({
  type: SIGN_IN_REQUEST, payload: { email, password }
});

export function* authSaga() {
  yield takeLatest(SIGN_IN_REQUEST, signIn);
}
