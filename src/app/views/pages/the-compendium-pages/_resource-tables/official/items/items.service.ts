import { Injectable } from "@angular/core";
// Models
import { Item } from "../../../../../../core/resources/_models/item.model";
// Routes
import { API_ROUTES } from "../../../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const BASE_URL = API_ROUTES.OFFICIAL.BASE;
const EQUIPMENT_URL = API_ROUTES.OFFICIAL.EQUIPMENT;
const MAGIC_ITEMS_URL = API_ROUTES.OFFICIAL.MAGIC_ITEMS;

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  constructor(private http: HttpClient) {}
  // /**
  //  * Gets all of the equipment from the Official API.
  //  *
  //  * @returns {Observable<any>} Observable of equipments.
  //  */
  // getAllEquipment(): Observable<any> {
  //   return this.http.get(EQUIPMENT_URL).pipe(
  //     map((data: any) => {
  //       return data.results;
  //     })
  //   );
  // }

  // /**
  //  * Gets all of the magic items from the Official API.
  //  *
  //  * @returns {Observable<any>} Observable of magic items.
  //  */
  // getAllMagicItems(): Observable<any> {
  //   return this.http.get(MAGIC_ITEMS_URL).pipe(
  //     map((data: any) => {
  //       return data.results;
  //     })
  //   );
  // }

  // /**
  //  * Gets a generated Item Object from an equipment's or magic item's metadata url.
  //  *
  //  * @param {string} url The equipment/magic item metadata url.
  //  * @returns {Observable<any>} Observable Item Object.
  //  */
  // getItemObject(url: string): Observable<any> {
  //   return this.http.get(BASE_URL + url).pipe(
  //     map((data: any) => {
  //       return this.generateItemObject(data);
  //     })
  //   );
  // }

  // /**
  //  * Generates Item Objects from raw API data.
  //  *
  //  * @param {any[]} dataArray The raw data array from API.
  //  * @returns {Items[]} Array of Item Objects.
  //  * @memberof ItemsService
  //  */
  // generateItemObject(element): Item {
  //   return new Item(
  //     element._id,
  //     element.name,
  //     element.equipment_category,
  //     element.gear_category,
  //     element.cost,
  //     element.weight,
  //     element.desc,
  //     element.contents
  //   );
  // }
}
