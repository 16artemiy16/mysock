import { AppStateI } from '../stores';
import { AuthStateI } from '../stores/auth.store';

export const authSelect = (selector: (state: AuthStateI) => any) => {
  return (state: AppStateI) => selector(state.auth);
};

export const selectIsAuthed = authSelect((state) => !!state.userData);
export const selectAuthedUser = authSelect((state) => state.userData);
