import { AuthStateI } from './auth.store';
import { AppStateI } from '../typization';
import { createSelector } from '@reduxjs/toolkit';

const selectAuth = (state: AppStateI): AuthStateI => state.auth;

export const selectIsAuthed = createSelector(selectAuth, (state) => !!state.userData);
export const selectAuthedUser = createSelector(selectAuth, (state) => state.userData);
export const selectIsSignInLoading = createSelector(selectAuth, (state) => state.isLoginLoading);
export const selectSignInErrorMsg = createSelector(selectAuth, (state) => state.signInErrorMsg);
