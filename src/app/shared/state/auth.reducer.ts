import { createReducer, on, Action } from "@ngrx/store";
import { UserModel } from "src/app/shared/models";
import { AuthApiActions, AuthUserActions } from "src/app/auth/actions";

export interface State {
  status: boolean;
  user: UserModel | null;
  error: string | null;
}

export const initialState: State = {
  status: true,
  user: null,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthUserActions.logout, (state, action) => {
    return {
      status: false,
      user: null,
      error: null
    };
  }),
  on(AuthUserActions.login, (state, action) => {
    return {
      status: true,
      user: null,
      error: null
    };
  }),
  on(AuthApiActions.getAuthStatusSuccess, (state, action) => {
    return {
      status: false,
      user: action.user,
      error: null
    };
  }),
  on(AuthApiActions.loginSuccess, (state, action) => {
    localStorage.setItem('auth', JSON.stringify(action.user));
    return {
      status: false,
      user: action.user,
      error: null
    };
  }),
  on(AuthApiActions.loginFailure, (state, action) => {
    return {
      status: false,
      user: null,
      error: action.message
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}

export const selectStatus = (state: State) => state.status;
export const selectUser = (state: State) => state.user;
export const selectError = (state: State) => state.error;
