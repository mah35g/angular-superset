import { Component, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { DashboardModel } from "src/app/shared/models";
import { State } from "src/app/shared/state";
import { environment } from '../../../../environments/environment';
import { DashboardPageActions } from "../../actions";

@Component({
  selector: "app-dashboard-detail",
  templateUrl: "./dashboard-detail.component.html",
  styleUrls: ["./dashboard-detail.component.css"]
})
export class DashboardDetailComponent {
  originalDashboard: DashboardModel | undefined;
  displayedColumns: string[] = ['slice_name', 'slice_url'];
  apiTarget = environment.apiTarget;

  dashboardForm = new FormGroup({
    name: new FormControl("")
  });

  constructor(private store: Store<State>) {}

  @Input() set currentDashboard(currentDashboard: DashboardModel) {
    this.dashboardForm.reset();
    this.originalDashboard = undefined;

    if (currentDashboard) {
      this.dashboardForm.setValue({
        name: currentDashboard.dashboard_title
      });

      this.originalDashboard = currentDashboard;
    }
  }

  clearDashboardDescription() {
    this.store.dispatch(DashboardPageActions.clearSelectedDashboard());
  }
}
