import { Injectable } from "@angular/core";
// Models
import { Item } from "../../_models/item.model";
// Routes
import { routes } from "../../../../../environments/app-secrets";
// Http
import { HttpClient } from "@angular/common/http";
// RXJS
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

// API url
const BASE_URL = routes.HOMEBREW.ITEMS;

@Injectable({
  providedIn: "root",
})
export class HomebrewItemsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(BASE_URL).pipe(
      map((data) => {
        let itemObjects = this.generateItemObjects(data);
        return itemObjects;
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
   * Returns an array of Item Objects (defined by the model).
   *
   * @param data Raw data from API.
   * @returns {Item[]} The array of Item Objects.
   */
  generateItemObjects(data: any): Item[] {
    let itemObjects: Item[] = [];

    data.forEach((element) => {
      itemObjects.push(
        new Item(
          element._id,
          element.name,
          element.type,
          element.requires_attunement,
          element.rarity,
          element.value,
          element.description,
          element.ratings
        )
      );
    });

    return itemObjects;
  }
}
