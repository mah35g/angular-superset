import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { DashboardModel } from "src/app/shared/models";

@Component({
  selector: "app-dashboard-detail",
  templateUrl: "./dashboard-detail.component.html",
  styleUrls: ["./dashboard-detail.component.css"]
})
export class DashboardDetailComponent {
  originalDashboard: DashboardModel | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  dashboardForm = new FormGroup({
    name: new FormControl(""),
    status: new FormControl(""),
    url: new FormControl("")
  });

  @Input() set currentDashboard(currentDashboard: DashboardModel) {
    this.dashboardForm.reset();
    this.originalDashboard = undefined;

    if (currentDashboard) {
      this.dashboardForm.setValue({
        name: currentDashboard.dashboard_title,
        status: currentDashboard.status,
        url: currentDashboard.url
      });

      this.originalDashboard = currentDashboard;
    }
  }
}
