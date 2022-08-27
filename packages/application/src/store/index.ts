import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects';

import authState from './auth/auth.store';
import { AppStateI } from './typization';
import { authSaga } from './auth/auth.sagas';

const sagaMiddleware = createSagaMiddleware()

export default configureStore<AppStateI>({
  reducer: {
    auth: authState,
  },
  middleware: () => [sagaMiddleware]
});

function *appSaga() {
  yield all([
    authSaga(),
  ]);
}

sagaMiddleware.run(appSaga)
