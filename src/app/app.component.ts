import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { State, selectAccessTokenState } from "src/app/shared/state";
import { AuthApiActions } from "./auth/actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Apache Superset Client";
  links = [
    { path: "/dashboard", icon: "dashboard", label: "Dashboard" },
    { path: "/dataset", icon: "dashboard", label: "Dataset" }
  ];

  auth$: Observable<string | null>;
  enableDashboard: boolean = false;

  constructor(private store: Store<State>, private router: Router) {
    this.auth$ = store.select(selectAccessTokenState).pipe(filter(tk => !!tk));
    this.auth$.subscribe(tk => {
      if (tk) {
        this.enableDashboard = true;
        this.router.navigate(['/dashboard']);
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(AuthApiActions.requestTokens());
  }
}
