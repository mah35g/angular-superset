import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DashboardModel } from "../models";

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

  load(id: number) {
    return this.http.get<DashboardModel>(`${BASE_URL}/dashboard/${id}`);
  }

  loadDashboardCharts(id: number) {
    return this.http.get<any>(`${BASE_URL}/dashboard/${id}/charts`);
  }

  loadDashboardDatasets(id: number) {
    return this.http.get<any>(`${BASE_URL}/dashboard/${id}/datasets`);
  }
}
