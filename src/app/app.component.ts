import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Apache Superset Client";
  links = [
    { path: "/dashboard", icon: "dashboard", label: "Dashboard" },
    { path: "/dataset", icon: "dashboard", label: "Dataset" }
  ];
}
