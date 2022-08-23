import { configureStore } from '@reduxjs/toolkit';
import authState, { AuthStateI } from './auth.store';

export interface AppStateI {
  auth: AuthStateI
}

export default configureStore<AppStateI>({
  reducer: {
    auth: authState,
  }
});
