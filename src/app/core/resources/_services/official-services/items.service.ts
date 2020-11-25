import { Injectable } from '@angular/core';
// Models
import { Item } from "../../_models/item.model";
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private apiService: ApiService) { }

  /**
   * Generates Item Objects from raw API data.
   *
   * @param {any[]} dataArray The raw data array from API.
   * @returns {Items[]} Array of Item Objects.
   * @memberof ItemsService
   */
  getItems(): Item[] {
    // The array of Items Objects.
    let ItemsObjects: Item[] = [];

    let data: any = this.apiService.getItemsData();

    data.forEach(element => {
      ItemsObjects.push(new Item(
        element.id,
        element.name,
        element.type,
        element.requires_attunement,
        element.rarity,
        element.value,
        element.description
      ));
    });

    return ItemsObjects;
  }
}
