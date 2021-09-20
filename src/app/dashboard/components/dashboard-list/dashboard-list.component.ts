import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DashboardModel } from "src/app/shared/models";

@Component({
  selector: "app-dashboard-list",
  templateUrl: "./dashboard-list.component.html",
  styleUrls: ["./dashboard-list.component.css"]
})
export class DashboardListComponent {
  @Input() dashboards: DashboardModel[];
  @Input() currentDashboard: DashboardModel;
  @Input() readonly = false;
  @Output() select = new EventEmitter();
}
