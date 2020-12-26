import { Injectable } from "@angular/core";
// Models
import { Armor } from "../../_models/armor.model";
// Routes
import { ROUTES } from "../../../../../environments/app-secrets";
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
export class HomebrewArmorsService {
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
   * @returns {Armor[]} The array of Weapon Objects.
   */
  generateArmorObjects(data: any): Armor[] {
    let armorObjects: Armor[] = [];

    data.forEach((element) => {
      armorObjects.push(
        new Armor(
          element._id,
          element.name,
          element.armor_category,
          element.armor_class,
          element.str_minimum,
          element.stealth_disadvantage,
          element.weight,
          element.cost,
          element.requires_attunement,
          element.rarity,
          element.desc,
          element.ratings
        )
      );
    });

    return armorObjects;
  }
}
