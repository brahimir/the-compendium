import { Injectable } from "@angular/core";
// Routes
import { API_ROUTES } from "../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable } from "rxjs";

// API urls
const GET_DASHBOARD = API_ROUTES.DM_TOOLS.DASHBOARD.GET_DASHBOARD;
const UPDATE_DASHBOARD = API_ROUTES.DM_TOOLS.DASHBOARD.UPDATE_DASHBOARD;

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  /**
   * Gets the User's Dashboard
   *
   * @param {string} userId The User's ID
   * @returns {Observable<any>} Observable of the User's Dashboard
   */
  getUserDashboard(userId: string): Observable<any> {
    return this.http.get(`${GET_DASHBOARD}${userId}`);
  }

  /**
   * Updates a User's Dashboard
   *
   * @param {string} userId The User's ID
   * @param {*} body The body - the new Dashboard
   * @returns {Observable<any>} Observable result from server.
   */
  updateUserDashboard(userId: string, body: any): Observable<any> {
    return this.http.put(`${UPDATE_DASHBOARD}${userId}`, body);
  }
}
