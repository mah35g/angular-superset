import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, tap, catchError, concatMap } from "rxjs/operators";
import { AuthService } from "../shared/services";
import { AuthApiActions, AuthUserActions } from "./actions";

@Injectable()
export class AuthApiEffects {
  constructor(private authService: AuthService, private actions$: Actions) {}

  getAuthStatus$ = createEffect(() =>
    this.authService
      .getStatus()
      .pipe(map(userOrNull => AuthApiActions.getAuthStatusSuccess(userOrNull)))
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthUserActions.login),
      concatMap(action => {
        return this.authService.login(action.username, action.password).pipe(
          map(user => AuthApiActions.loginSuccess({ username: action.username, access_token: user.access_token})),
          catchError(message => of(AuthApiActions.loginFailure(message.error.message)))
        );
      })
    )
  );

  logout$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthUserActions.logout),
        tap(() => this.authService.logout())
      ),
    { dispatch: false }
  );
}
