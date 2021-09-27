import { createAction, props } from "@ngrx/store";

export const enter = createAction("[Dashboard Page] Enter");

export const selectDashboard = createAction(
  "[Dashboard Page] Select Dashboard",
  props<{ id: number }>()
);

export const clearSelectedDashboard = createAction(
  "[Dashboard Page] Clear Selected Dashboard"
);

export const resetDashboard = createAction(
  "[Dashboard Page] Reset Dashboard"
);
