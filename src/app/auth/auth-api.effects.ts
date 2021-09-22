import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { map, exhaustMap } from "rxjs/operators";
import { AuthService } from "../shared/services";
import { AuthApiActions } from "./actions";

@Injectable()
export class AuthApiEffects {
  constructor(private authService: AuthService, private actions$: Actions) {}

  loadDashboard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.requestTokens),
      exhaustMap(() =>
        this.authService
          .getToken()
          .pipe(map(auth => AuthApiActions.tokensReceived(auth)))
      )
    )
  );
}