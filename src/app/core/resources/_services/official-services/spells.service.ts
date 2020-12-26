import { Injectable } from "@angular/core";
// Models
import { Spell } from "../../_models/spell.model";
// Routes
import { ROUTES } from "../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const BASE_URL = ROUTES.OFFICIAL.BASE;
const SPELL_URL = ROUTES.OFFICIAL.SPELLS;

@Injectable({
  providedIn: "root",
})
export class SpellService {
  constructor(private http: HttpClient) {}

  /**
   * Gets all of the spell results from the Official API.
   *
   * @returns {Observable<any>} Observable of spells.
   */
  getAllSpells(): Observable<any> {
    return this.http.get(SPELL_URL).pipe(
      map((data: any) => {
        return data.results;
      })
    );
  }

  /**
   * Gets a generated Armor Object from an equipment's metadata url.
   *
   * @param {string} url The equipment metadata url.
   * @returns {Observable<any>} Observable Armor Object.
   */
  getSpellObject(url: string): Observable<any> {
    return this.http.get(BASE_URL + url).pipe(
      map((data: any) => {
        return this.generateSpellObject(data);
      })
    );
  }

  /**
   * Generates a Spell Object from and element from raw API data.
   * @param element Element to generate Spell Object from.
   */
  generateSpellObject(element: any): Spell {
    return new Spell(
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
    );
  }
}
