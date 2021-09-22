import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromDashboard from "./dashboard.reducer";
import * as fromAuth from "./auth.reducer";
import { logoutMetareducer } from "./logout.metareducer";

export interface State {
  auth: fromAuth.State;
  dashboard: fromDashboard.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  dashboard: fromDashboard.reducer
};

export const metaReducers: MetaReducer<State>[] = [logoutMetareducer];

/**
 * Auth Selectors
 */
export const selectAuthState = (state: State) => state.auth;
export const selectAccessTokenState = (state: State) => {
  return state.auth ? state.auth.access_token : null;
}

/**
 * Dashboard Selectors
 */
export const selectDashboardState = (state: State) => state.dashboard;
export const selectAllDashboard = createSelector(
  selectDashboardState,
  fromDashboard.selectAll
);
export const selectActiveDashboard = createSelector(
  selectDashboardState,
  fromDashboard.selectActiveDasboard
);
