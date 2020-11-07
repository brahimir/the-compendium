import { Injectable } from '@angular/core';
// Models
import { Item } from "../../../core/officialResources/_models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  /**
   * Generates Item Objects from raw API data.
   *
   * @param {any[]} dataArray The raw data array from API.
   * @returns {Items[]} Array of Item Objects.
   * @memberof ItemsService
   */
  getItems(dataArray: any[]): Item[] {
    // The array of Items Objects.
    let ItemsObjects: Item[] = [];

    dataArray.forEach(element => {
      ItemsObjects.push(new Item(
        element.id,
        element.name,
        element.type,
        element.rarity,
        element.value,
        element.description
      ));
    });

    return ItemsObjects;
  }
}
