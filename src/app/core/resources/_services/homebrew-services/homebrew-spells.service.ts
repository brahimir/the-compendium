import { Injectable } from "@angular/core";
// Models
import { Spell } from "../../_models/spell.model";
// Routes
import { routes } from "../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

// API url
const BASE_URL = routes.HOMEBREW.SPELLS;

@Injectable({
  providedIn: "root",
})
export class HomebrewSpellsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(BASE_URL).pipe(
      map((data) => {
        let weaponObjects = this.generateSpellObjects(data);
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
   * @returns {Spell[]} The array of Weapon Objects.
   */
  generateSpellObjects(data: any): Spell[] {
    let spellObjects: Spell[] = [];

    data.forEach((element) => {
      spellObjects.push(
        new Spell(
          element._id,
          element.name,
          element.level,
          element.is_cantrip,
          element.classes,
          element.school,
          element.casting_time,
          element.range,
          element.duration,
          element.components,
          element.description,
          element.at_higher_levels,
          element.ratings
        )
      );
    });

    return spellObjects;
  }
}
