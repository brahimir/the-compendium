import { Injectable } from "@angular/core";
// Routes
import { API_ROUTES } from "../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable } from "rxjs";

// API urls
const GET_VIRTUAL_SCREEN = API_ROUTES.VIRTUAL_SCREEN.GET_VIRTUAL_SCREEN;
const UPDATE_VIRTUAL_SCREEN = API_ROUTES.VIRTUAL_SCREEN.UPDATE_VIRTUAL_SCREEN;

@Injectable({
  providedIn: "root",
})
export class VirtualScreenService {
  constructor(private http: HttpClient) {}

  /**
   * Gets the User's Virtual Screen
   *
   * @param {string} userId The User's ID
   * @returns {Observable<any>} Observable of the User's Virtual Screen
   */
  getUserVirtualScreen(userId: string): Observable<any> {
    return this.http.get(`${GET_VIRTUAL_SCREEN}${userId}`);
  }

  /**
   * Updates a User's Virtual Screen
   *
   * @param {string} userId The User's ID
   * @param {*} body The body - the new Virtual Screen
   * @returns {Observable<any>} Observable result from server.
   */
  updateUserVirtualScreen(userId: string, body: any): Observable<any> {
    return this.http.put(`${UPDATE_VIRTUAL_SCREEN}${userId}`, body);
  }
}
