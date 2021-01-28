import { Injectable } from "@angular/core";
// Routes
import { API_ROUTES } from "../../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CombatInstance } from "./_models/combat-instance.model";

// API urls
const GET_COMBAT_TRACKER = API_ROUTES.DM_TOOLS.COMBAT_TRACKER.GET_COMBAT_TRACKER;
const UPDATE_COMBAT_TRACKER = API_ROUTES.DM_TOOLS.COMBAT_TRACKER.UPDATE_COMBAT_TRACKER;

@Injectable({
  providedIn: "root",
})
export class CombatTrackerService {
  constructor(private http: HttpClient) {}

  /**
   * Gets the User's Combat Tracker.
   *
   * @param {string} userId The User's ID.
   * @returns {Observable<any>} Observable of the User's Combat Tracker.
   */
  getUserCombatTrackers(userId: string): Observable<CombatInstance[]> {
    return this.http.get(`${GET_COMBAT_TRACKER}${userId}`).pipe(
      map((result: any) => {
        if (result.combatTrackers.length <= 0) {
          return null;
        } else {
          return result.combatTrackers;
        }
      })
    );
  }

  /**
   * Updates a User's Combat Tracker.
   *
   * @param {string} userId The User's ID.
   * @param {*} body The body - the new Combat Tracker.
   * @returns {Observable<any>} Observable result from server.
   */
  updateUserCombatTrackers(userId: string, body: any): Observable<any> {
    return this.http.put(`${UPDATE_COMBAT_TRACKER}${userId}`, body);
  }
}
