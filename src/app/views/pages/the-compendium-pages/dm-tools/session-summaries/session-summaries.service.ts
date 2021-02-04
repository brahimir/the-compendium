import { Injectable } from "@angular/core";
// Models
import { Session } from "src/app/views/pages/the-compendium-pages/dm-tools/session-summaries/_models/session.model";
// Routes
import { API_ROUTES } from "../../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

// API urls
const GET_SESSIONS: string = API_ROUTES.DM_TOOLS.SESSIONS.GET_SESSIONS;
const UPDATE_SESSIONS: string = API_ROUTES.DM_TOOLS.SESSIONS.UPDATE_SESSIONS;

@Injectable({
  providedIn: "root",
})
export class SessionSummariesService {
  constructor(private http: HttpClient) {}

  /**
   * Gets the User's Session Summaries.
   *
   * @param {string} userId User's ID
   * @returns {Observable<any>} Observable of Session Summaries
   */
  getSessionSummaries(userId: string): Observable<any> {
    return this.http.get(`${GET_SESSIONS}${userId}`).pipe(
      map((data: any) => {
        let sessions: Session[] = data.sessions;
        return sessions;
      })
    );
  }

  /**
   * Updates the User's Session Summaries.
   *
   * @param {string} userId The User's ID
   * @param {*} body The updated User's Session Summaries body.
   * @memberof SessionSummariesService
   */
  updateSessionSummaries(userId: string, body: Session[]): Observable<any> {
    return this.http.put(`${UPDATE_SESSIONS}${userId}`, body);
  }
}
