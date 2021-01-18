import { Injectable } from "@angular/core";
// Models
import { Npc } from "../../_models/npc.model";
// Routes
import { API_ROUTES } from "../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const BASE_URL = API_ROUTES.OFFICIAL.BASE;
const ARMOR_URL = API_ROUTES.OFFICIAL.MONSTERS;

@Injectable({
  providedIn: "root",
})
export class NpcsService {
  constructor(private http: HttpClient) {}
  /**
   * Gets all of the monsters from the Official API.
   *
   * @returns {Observable<any>} Observable of equipments.
   */
  getAllArmors(): Observable<any> {
    return this.http.get(ARMOR_URL).pipe(
      map((data: any) => {
        return data.results;
      })
    );
  }

  /**
   * Gets a generated Npc Object from a monster's metadata url.
   *
   * @param {string} url The monster metadata url.
   * @returns {Observable<any>} Observable Armor Object.
   */
  getNpcObject(url: string): Observable<any> {
    return this.http.get(BASE_URL + url).pipe(
      map((data: any) => {
        return this.generateNpcObject(data);
      })
    );
  }

  /**
   * Generates an Npc Object from and element from raw API data.
   * @param element Element to generate Npc Object from.
   */
  generateNpcObject(element: any): Npc {
    return new Npc(
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
    );
  }
}
