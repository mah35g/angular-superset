import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, timer } from "rxjs";
import { map } from "rxjs/operators";
import { SecurityLoginModel, UserModel } from "../models";

const BASE_URL = "http://localhost:4200/api/v1";
const HEADER = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const body: SecurityLoginModel = {
      username: username,
      password: password,
      provider: 'db',
      refresh: true
    };
    return this.http.post<any>(`${BASE_URL}/security/login`, body);
  }

  logout() {
    localStorage.removeItem('auth');
  }

  getStatus(): Observable<null | UserModel> {
    return timer(750).pipe(
      map(() => {
        const userString = localStorage.getItem("auth");
        if (!userString) return null;

        return JSON.parse(userString);
      })
    );
  }
}
