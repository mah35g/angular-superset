import { createAction, props } from "@ngrx/store";
import { DashboardCharts, DashboardDatasets, DashboardModel } from "src/app/shared/models";

export const dashboardLoaded = createAction(
    "[Dashboard API] Dashboard Loaded Success",
    props<{ dashboard: DashboardModel[] }>()
);

export const dashboardChartsLoaded = createAction(
    "[Dashboard API] Dashboard Charts Loaded Success",
    props<{ charts: DashboardCharts[] }>()
);

export const dashboardDatasetsLoaded = createAction(
    "[Dashboard API] Dashboard Datasets Loaded Success",
    props<{ datasets: DashboardDatasets[] }>()
);
