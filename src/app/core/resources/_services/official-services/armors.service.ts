import { Injectable } from "@angular/core";
// Models
import { Armor } from "../../_models/armor.model";
// Routes
import { ROUTES } from "../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const BASE_URL = ROUTES.OFFICIAL.BASE;
const ARMOR_URL = ROUTES.OFFICIAL.ARMORS;

@Injectable({
  providedIn: "root",
})
export class ArmorsService {
  constructor(private http: HttpClient) {}
  /**
   * Gets all of the equipment from the Official API.
   *
   * @returns {Observable<any>} Observable of equipments.
   */
  getAllArmors(): Observable<any> {
    return this.http.get(ARMOR_URL).pipe(
      map((data: any) => {
        return data.equipment;
      })
    );
  }

  /**
   * Gets a generated Armor Object from an equipment's metadata url.
   *
   * @param {string} url The equipment metadata url.
   * @returns {Observable<any>} Observable Armor Object.
   */
  getArmorObject(url: string): Observable<any> {
    return this.http.get(BASE_URL + url).pipe(map((data: any) => {
      return this.generateArmorObject(data);
    }));
  }

  /**
   * Returns an array of Weapon Objects (defined by the model).
   *
   * @param data Raw data from API.
   * @returns {Armor[]} The array of Weapon Objects.
   */
  generateArmorObject(element: any): Armor {
    return new Armor(
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
    );
  }
}
