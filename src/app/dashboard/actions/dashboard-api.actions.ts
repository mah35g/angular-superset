import { createAction, props } from "@ngrx/store";
import { DashboardModel } from "src/app/shared/models";

export const dashboardLoaded = createAction(
    "[Dashboard API] Dashboard Loaded Success",
    props<{ dashboard: DashboardModel[] }>()
);
