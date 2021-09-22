import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SecurityLoginModel } from "../models";

const BASE_URL = "http://localhost:4200/api/v1";
const HEADER = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken() {
      const body: SecurityLoginModel = {
          username: 'admin',
          password: 'admin',
          provider: 'db',
          refresh: true
      };
      return this.http.post<any>(`${BASE_URL}/security/login`, body);
  }
}
