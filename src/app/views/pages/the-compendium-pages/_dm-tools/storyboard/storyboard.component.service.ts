import { Injectable } from "@angular/core";
// Routes
import { ROUTES } from "../../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

// API url
const BASE_URL = ROUTES.HOMEBREW.ARMORS;

@Injectable({
  providedIn: "root",
})
export class StoryboardService {
  constructor(private http: HttpClient) {}

//   getAll(): Observable<any> {
//     return this.http.get(BASE_URL).pipe(
//       map((data) => {
//         let weaponObjects = this.generateArmorObjects(data);
//         return weaponObjects;
//       }),

//       catchError((error) => {
//         console.error(error);
//         return throwError("Something went wrong accessing the API.");
//       })
//     );
//   }

  get(id): Observable<any> {
    return this.http.get(`${BASE_URL}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(BASE_URL, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${BASE_URL}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${BASE_URL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(BASE_URL);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${BASE_URL}?title=${title}`);
  }
}
