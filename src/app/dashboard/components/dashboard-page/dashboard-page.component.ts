import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  State,
  selectAllDashboard,
  selectActiveDashboard
} from "src/app/shared/state";
import { DashboardModel, DashboardRequiredProps } from "src/app/shared/models";
import { DashboardPageActions } from "../../actions";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard-page.component.html",
  styleUrls: ["./dashboard-page.component.css"]
})
export class DashboardPageComponent implements OnInit {
  dashboard$: Observable<DashboardModel[]>;
  currentDashboard$: Observable<DashboardModel | null>;

  constructor(private store: Store<State>) {
    this.dashboard$ = store.select(selectAllDashboard);
    this.currentDashboard$ = store.select(selectActiveDashboard);
  }

  ngOnInit() {
    this.store.dispatch(DashboardPageActions.enter());
  }

  onSelect(dashboard: DashboardModel) {
    this.store.dispatch(DashboardPageActions.selectDashboard({ id: dashboard.id }));
  }
}