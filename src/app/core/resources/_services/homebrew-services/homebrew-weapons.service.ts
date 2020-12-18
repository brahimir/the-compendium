import { Injectable } from "@angular/core";
// Models
import { Weapon } from "../../_models/weapon.model";
// Routes
import { routes } from "../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

const BASE_URL = routes.HOMEBREW.WEAPONS;

@Injectable({
  providedIn: "root",
})
export class HomebrewWeaponsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(BASE_URL).pipe(
      map((data) => {
        let weaponObjects = this.generateArmorObjects(data);
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
  generateArmorObjects(data: any): Weapon[] {
    let armorObjects: Weapon[] = [];

    data.forEach((element) => {
      armorObjects.push(
        new Weapon(
          element._id,
          element.name,
          element.type,
          element.is_martial,
          element.damage,
          element.damage_type,
          element.requires_attunement,
          element.rarity,
          element.value,
          element.properties,
          element.description,
          element.ratings
        )
      );
    });

    return armorObjects;
  }
}
