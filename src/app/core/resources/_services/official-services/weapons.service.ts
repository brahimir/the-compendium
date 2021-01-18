import { Injectable } from "@angular/core";
// Models
import { Weapon } from "../../_models/weapon.model";
// Routes
import { API_ROUTES } from "../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const BASE_URL = API_ROUTES.OFFICIAL.BASE;
const WEAPON_URL = API_ROUTES.OFFICIAL.WEAPONS;

@Injectable({
  providedIn: "root",
})
export class WeaponService {
  constructor(private http: HttpClient) {}
  /**
   * Gets all of the weapons from the Official API.
   *
   * @returns {Observable<any>} Observable of weapons.
   */
  getAllWeapons(): Observable<any> {
    return this.http.get(WEAPON_URL).pipe(
      map((data: any) => {
        return data.equipment;
      })
    );
  }

  /**
   * Gets a generated Weapon Object from a weapon's metadata url.
   *
   * @param {string} url The weapon's metadata url.
   * @returns {Observable<any>} Observable Weapon Object.
   */
  getWeaponObject(url: string): Observable<any> {
    return this.http.get(BASE_URL + url).pipe(
      map((data: any) => {
        return this.generateWeaponObject(data);
      })
    );
  }

  /**
   * Returns an array of Weapon Objects (defined by the model).
   *
   * @param data Raw data from API.
   * @returns {Armor[]} The array of Weapon Objects.
   */
  generateWeaponObject(element: any): Weapon {
    return new Weapon(
      element._id,
      element.name,
      element.weapon_category,
      element.weapon_range,
      element.cost,
      element.damage,
      element.range,
      element.weight,
      element.properties,
      element.requires_attunement,
      element.rarity,
      element.desc,
      element.rarity
    );
  }
}
