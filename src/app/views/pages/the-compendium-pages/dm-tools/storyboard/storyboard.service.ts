import { Injectable } from "@angular/core";
// Models
import { Plot } from "src/app/core/resources/_models/dm_tools/storyboard/plot.model";
// Routes
import { API_ROUTES } from "../../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable } from "rxjs";

// API urls
const GET_STORYBOARD: string = API_ROUTES.DM_TOOLS.STORYBOARD.GET_STORYBOARD;
const UPDATE_STORYBOARD: string = API_ROUTES.DM_TOOLS.STORYBOARD.UPDATE_STORYBOARD;

@Injectable({
  providedIn: "root",
})
export class StoryboardService {
  constructor(private http: HttpClient) {}

  getStoryboard(userId: string): Observable<any> {
    return this.http.get(`${GET_STORYBOARD}${userId}`);
  }

  updateStoryboard(userId: string, body: any): Observable<any> {
    return this.http.put(`${UPDATE_STORYBOARD}${userId}`, body);
  }

  /**
   * Returns an array of Plot Objects (defined by the model).
   *
   * @param data Raw data from API.
   * @returns {Plot[]} The array of Plot Objects.
   */
  generatePlotObjects(data: any): Plot[] {
    let plotObjects: Plot[] = [];

    data.forEach((element) => {
      plotObjects.push(new Plot(element.title, element.description));
    });

    return plotObjects;
  }
}
