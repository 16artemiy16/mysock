import { configureStore } from '@reduxjs/toolkit';
import authState from './auth/auth.store';
import { AppStateI } from './typization';


export default configureStore<AppStateI>({
  reducer: {
    auth: authState,
  },
});
