import { createReducer, on, Action } from "@ngrx/store";
import { createEntityAdapter } from "@ngrx/entity";
import { AuthTokenModel } from "src/app/shared/models";
import { AuthApiActions } from "src/app/auth/actions";

export interface State extends AuthTokenModel {
  access_token: string | null;
  refresh_token: string | null;
}

export const adapter = createEntityAdapter<AuthTokenModel>();

export const initialState: State = {
  access_token: null,
  refresh_token: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthApiActions.tokensReceived, (state, action) => {
    return {
      ...state,
      access_token: action.access_token,
      refresh_token: action.refresh_token
    }
  })
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}

export const { selectAll, selectEntities } = adapter.getSelectors();
