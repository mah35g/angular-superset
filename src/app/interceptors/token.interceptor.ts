import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State, selectAuthState } from 'src/app/shared/state';
import { first, mergeMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private store$: Store<State>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        if (req.url.includes('security/login')) {
          return next.handle(req);
        }

        if (req.url.includes('api/v1')) {
          return this.addAccessToken(req).pipe(
            first(),
            mergeMap((reqWithToken: HttpRequest<any>) => next.handle(reqWithToken))
          );
        }

        return next.handle(req);
  }

  addAccessToken(req: HttpRequest<any>) {
    return this.store$.pipe(
      select(selectAuthState),
      first(),
      mergeMap((token: any) => {
        if (token.access_token) {
          req = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token.access_token}`)
          });
        }

        return of(req);
      })
    );
  }
}