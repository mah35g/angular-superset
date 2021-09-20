import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as uuid from "uuid/v4";
import { DashboardModel, DashboardRequiredProps } from "../models";

const BASE_URL = "http://localhost:4200/api/v1";
const HEADER = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<any>(`${BASE_URL}/dashboard`);
  }

  load(id: string) {
    return this.http.get<DashboardModel>(`${BASE_URL}/dashboard/${id}`);
  }
}
