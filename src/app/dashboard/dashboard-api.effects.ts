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
      concatMap(() =>
        this.dashboardService
          .all()
          .pipe(map(dashboard => DashboardApiActions.dashboardLoaded({ dashboard: dashboard.result })))
      )
    )
  );

  loadDashboardCharts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardPageActions.selectDashboard),
      concatMap((action) =>
        this.dashboardService
          .loadDashboardCharts(action.id)
          .pipe(map(charts => DashboardApiActions.dashboardChartsLoaded({ charts: charts.result })))
      )
    )
  );

  loadDashboardDatasets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardPageActions.selectDashboard),
      concatMap((action) =>
        this.dashboardService
          .loadDashboardDatasets(action.id)
          .pipe(map(datasets => DashboardApiActions.dashboardDatasetsLoaded({ datasets: datasets.result })))
      )
    )
  );
}