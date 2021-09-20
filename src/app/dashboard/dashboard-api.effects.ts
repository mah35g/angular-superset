import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { mergeMap, map, exhaustMap, concatMap } from "rxjs/operators";
import { DashboardService } from "../shared/services";
import { DashboardPageActions, DashboardApiActions } from "./actions";

@Injectable()
export class DashboardApiEffects {
  constructor(private dashboardService: DashboardService, private actions$: Actions) {}

  loadDashboard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardPageActions.enter),
      exhaustMap(() =>
        this.dashboardService
          .all()
          .pipe(map(dashboard => DashboardApiActions.dashboardLoaded({ dashboard: dashboard.result })))
      )
    )
  );
}