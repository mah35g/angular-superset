import { createAction, props } from "@ngrx/store";
import { DashboardRequiredProps } from "src/app/shared/models";

export const enter = createAction("[Dashboard Page] Enter");

export const selectDashboard = createAction(
  "[Dashboard Page] Select Dashboard",
  props<{ id: number }>()
);

export const clearSelectedDashboard = createAction(
  "[Dashboard Page] Clear Selected Dashboard"
);