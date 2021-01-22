import { Injectable } from "@angular/core";
// Models
import { Session } from "src/app/core/resources/_models/dm_tools/session_summaries/session.model";
// Routes
import { API_ROUTES } from "../../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable } from "rxjs";

// API urls
const USERS_URL = API_ROUTES.AUTH.USERS;
const UPDATE_SESSIONS = API_ROUTES.DM_TOOLS.UPDATE_SESSIONS;

@Injectable({
  providedIn: "root",
})
export class SessionSummariesService {
  constructor(private http: HttpClient) {}

  getSessionSummaries(userId: string): Observable<any> {
    return this.http.get(`${USERS_URL}${userId}`);
  }

  updateSessionSummaries(userId: string, body: any): Observable<any> {
    return this.http.put(`${UPDATE_SESSIONS}${userId}`, body);
  }

  /**
   * Returns an array of Plot Objects (defined by the model).
   *
   * @param data Raw data from API.
   * @returns {Session[]} The array of Plot Objects.
   */
  generateSessionObjects(data: any): Session[] {
    let objects: Session[] = [];

    data.forEach((element) => {
      objects.push(
        new Session(
          element.chapter,
          element.episode,
          element.date,
          element.content
        )
      );
    });

    return objects;
  }
}
