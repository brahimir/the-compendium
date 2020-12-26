import { Injectable } from "@angular/core";
// Models
import { Npc } from "../../_models/npc.model";
// Routes
import { ROUTES } from "../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

// API url
const BASE_URL = ROUTES.HOMEBREW.NPCS;

@Injectable({
  providedIn: "root",
})
export class HomebrewNpcsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(BASE_URL).pipe(
      map((data) => {
        let npcObjects = this.generateNpcObjects(data);
        return npcObjects;
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
   * Returns an array of Npc Objects (defined by the model).
   *
   * @param data Raw data from API.
   * @returns {Npc[]} The array of Npc Objects.
   */
  generateNpcObjects(data: any): Npc[] {
    let npcObjects: Npc[] = [];

    data.forEach((element) => {
      npcObjects.push(
        new Npc(
          element._id,
          element.name,
          element.size,
          element.type,
          element.subtype,
          element.alignment,
          element.armor_class,
          element.hit_points,
          element.hit_dice,
          element.speed,
          element.strength,
          element.dexterity,
          element.constitution,
          element.intelligence,
          element.wisdom,
          element.charisma,
          element.proficiencies,
          element.damage_vulnerabilities,
          element.damage_resistances,
          element.damage_immunities,
          element.condition_immunities,
          element.senses,
          element.languages,
          element.challenge_rating,
          element.xp,
          element.special_abilities,
          element.actions,
          element.legendary_actions,
          element.ratings
        )
      );
    });

    return npcObjects;
  }
}
