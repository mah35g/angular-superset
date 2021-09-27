import { createReducer, on, Action, createSelector } from "@ngrx/store";
import { DashboardModel } from "src/app/shared/models";
import { DashboardPageActions, DashboardApiActions } from "src/app/dashboard/actions";

export interface State {
  dashboards: DashboardModel[];
  activeDashboardId: number | null;
  activeDashboard: any | null;
}

export const initialState: State = {
  activeDashboardId: null,
  activeDashboard: null,
  dashboards: []
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardApiActions.dashboardLoaded, (state, action) => {
    return {
      ...state,
      dashboards: action.dashboard
    };
  }),
  on(DashboardPageActions.clearSelectedDashboard, DashboardPageActions.enter, state => {
    return { ...state, activeDashboardId: null };
  }),
  on(DashboardPageActions.selectDashboard, (state, action) => {
    let currentDashboard = state.dashboards.find(d => d.id === action.id);
    return {
      ...state,
      activeDashboardId: action.id,
      activeDashboard: currentDashboard
    };
  }),
  on(DashboardPageActions.resetDashboard, (state, action) => {
    return {
      ...state,
      dashboards: [],
      activeDashboardId: null
    };
  }),
  on(DashboardApiActions.dashboardChartsLoaded, (state, action) => {
    let current = { ...state.activeDashboard };
    current.charts = action.charts;
    return {
      ...state,
      activeDashboard: current
    };
  }),
  on(DashboardApiActions.dashboardDatasetsLoaded, (state, action) => {
    let current = { ...state.activeDashboard };
    current.datasets = action.datasets;
    return {
      ...state,
      activeDashboard: current
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return dashboardReducer(state, action);
}

export const selectActiveDashboardId = (state: State) => state.activeDashboardId;
export const selectActiveDasboard = (state: State) => {
  return state.activeDashboard;
};
