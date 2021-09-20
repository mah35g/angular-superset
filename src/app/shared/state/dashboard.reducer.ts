import { createReducer, on, Action, createSelector } from "@ngrx/store";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { DashboardModel } from "src/app/shared/models";
import { DashboardPageActions, DashboardApiActions } from "src/app/dashboard/actions";

export interface State extends EntityState<DashboardModel> {
  activeDashboardId: number | null;
}

export const adapter = createEntityAdapter<DashboardModel>();

export const initialState: State = adapter.getInitialState({
  activeDashboardId: null
});

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardApiActions.dashboardLoaded, (state, action) => {
    return adapter.addAll(action.dashboard, state);
  }),
  on(DashboardPageActions.clearSelectedDashboard, DashboardPageActions.enter, state => {
    return {
      ...state,
      activeDashboardId: null
    };
  }),
  on(DashboardPageActions.selectDashboard, (state, action) => {
    return {
      ...state,
      activeDashboardId: action.id
    };
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return dashboardReducer(state, action);
}

export const { selectAll, selectEntities } = adapter.getSelectors();
export const selectActiveDashboardId = (state: State) => state.activeDashboardId;
export const selectActiveDasboard = createSelector(
  selectEntities,
  selectActiveDashboardId,
  (dashboardEntities, activeDashboardId) => {
    return activeDashboardId ? dashboardEntities[activeDashboardId]! : null;
  }
);