import { Injectable } from "@angular/core";
// Models
import { Weapon } from "../../../../views/pages/the-compendium-pages/_resource-tables/_models/weapon.model";
// Routes
import { API_ROUTES } from "../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

// API url
const BASE_URL = API_ROUTES.HOMEBREW.WEAPONS;

@Injectable({
  providedIn: "root"
})
export class HomebrewWeaponsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(BASE_URL).pipe(
      map((data) => {
        let weaponObjects = this.generateWeaponObjects(data);
        return weaponObjects;
      }),

      catchError((error) => {
        console.error(error);
        return throwError("Something went wrong accessing the API.");
      })
    );
  }

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

  /**
   * Returns an array of Weapon Objects (defined by the model).
   *
   * @param data Raw data from API.
   * @returns {Weapon[]} The array of Weapon Objects.
   */
  generateWeaponObjects(data: any): Weapon[] {
    let weaponObjects: Weapon[] = [];

    data.forEach((element: Weapon) => {
      weaponObjects.push(element);
    });

    return weaponObjects;
  }
}
