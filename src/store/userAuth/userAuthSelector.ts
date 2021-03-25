import { AppState } from '../store';

export const selectUser = (state: AppState) => state.userAuth.user;
