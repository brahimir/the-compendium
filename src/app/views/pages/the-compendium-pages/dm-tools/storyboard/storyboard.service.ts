import { Injectable } from "@angular/core";
// Models
import { Plot } from "./_models/plot.model";
// Routes
import { API_ROUTES } from "../../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable } from "rxjs";
import { Storyboard } from "./_models/storyboard.model";
import { map } from "rxjs/operators";

// API urls
const GET_STORYBOARD: string = API_ROUTES.DM_TOOLS.STORYBOARD.GET_STORYBOARD;
const UPDATE_STORYBOARD: string = API_ROUTES.DM_TOOLS.STORYBOARD.UPDATE_STORYBOARD;

@Injectable({
  providedIn: "root",
})
export class StoryboardService {
  constructor(private http: HttpClient) {}

  getStoryboard(userId: string): Observable<Storyboard> {
    return this.http.get(`${GET_STORYBOARD}${userId}`).pipe(
      map((data: any) => {
        return data.storyboard;
      })
    );
  }

  updateStoryboard(userId: string, body: any): Observable<any> {
    return this.http.put(`${UPDATE_STORYBOARD}${userId}`, body);
  }
}
