import { Injectable } from '@angular/core';
// Models
import { Weapon } from '../../_models/weapon.model';
// Routes
import { routes } from "../../../../../environments/app-secrets";
// Http
import { HttpClient, HttpHeaders } from '@angular/common/http';
// RXJS
import { Observable } from 'rxjs';

const URL = routes.HOMEBREW.WEAPONS;

@Injectable({
  providedIn: 'root'
})

export class HomebrewWeaponsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(URL)
  }

  get(id): Observable<any> {
    return this.http.get(`${URL}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(URL, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${URL}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${URL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(URL);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${URL}?title=${title}`);
  }
}
