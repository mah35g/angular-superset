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
export const selectAuthStatus = createSelector(
  selectAuthState,
  fromAuth.selectStatus
);
export const selectAuthUser = createSelector(
  selectAuthState,
  fromAuth.selectUser
);
export const selectAuthError = createSelector(
  selectAuthState,
  fromAuth.selectError
);

/**
 * Dashboard Selectors
 */
export const selectDashboardState = (state: State) => state.dashboard;
export const selectAllDashboard = (state: State) => state.dashboard ? state.dashboard.dashboards : [];
export const selectActiveDashboard = createSelector(
  selectDashboardState,
  fromDashboard.selectActiveDasboard
);
