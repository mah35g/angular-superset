import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/shared/state';
import { catchError } from 'rxjs/operators';
import { AuthUserActions } from '../auth/actions';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private store$: Store<State>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        return this.needsAccessToken(req) ?
                this.nextHandle(this.addAccessToken(req), next) :
                this.nextHandle(req, next);
  }

  nextHandle(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(err => {
        if (err && err.status === 401) {
          this.store$.dispatch(AuthUserActions.logout());
        }
        return throwError(err);
      })
    );
  }

  addAccessToken(req: HttpRequest<any>) {
    const auth = localStorage.getItem('auth');
    const userModel = auth ? JSON.parse(auth) : null;
    if (userModel && userModel.access_token) {
      return req.clone({
        headers: req.headers.set('Authorization', `Bearer ${userModel.access_token}`)
      });
    }

    return req;
  }

  needsAccessToken(req: HttpRequest<any>) {
    if (req.url.includes('api/v1/security/login')) {
      return false;
    }

    if (req.url.includes('api/v1')) {
      return true;
    }

    return false;
  }
}
