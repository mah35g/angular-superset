import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromDashboard from "./dashboard.reducer";
import { logoutMetareducer } from "./logout.metareducer";

export interface State {
  dashboard: fromDashboard.State;
}

export const reducers: ActionReducerMap<State> = {
  dashboard: fromDashboard.reducer
};

export const metaReducers: MetaReducer<State>[] = [logoutMetareducer];

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
