import { Injectable } from "@angular/core";
// Models
import { Spell } from "../../_models/spell.model";
// Routes
import { API_ROUTES } from "../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

// API url
const BASE_URL = API_ROUTES.HOMEBREW.SPELLS;

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
          element.desc,
          element.higher_level,
          element.range,
          element.components,
          element.material,
          element.ritual,
          element.duration,
          element.concentration,
          element.casting_time,
          element.level,
          element.attack_type,
          element.damage,
          element.school,
          element.classes,
          element.subclasses,
          element.ratings
        )
      );
    });

    return spellObjects;
  }
}
