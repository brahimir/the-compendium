import { Injectable } from "@angular/core";
// Models
import { Armor } from "../../_models/armor.model";
// Routes
import { API_ROUTES } from "../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const BASE_URL = API_ROUTES.OFFICIAL.BASE;
const ARMOR_URL = API_ROUTES.OFFICIAL.ARMORS;

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
   * Generates an Armor Object from and element from raw API data.
   * @param element Element to generate Armor Object from.
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
