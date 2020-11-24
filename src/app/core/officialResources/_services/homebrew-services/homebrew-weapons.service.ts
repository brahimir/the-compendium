import { Injectable } from '@angular/core';
// Models
import { Weapon } from "../../_models/weapon.model";
// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class HomebrewWeaponsService {
  // db Path
  private dbPath = '/homebrew_weapons';

  // Firelist Reference
  ref: AngularFireList<Weapon> = null;

  constructor(private db: AngularFireDatabase) {
    this.ref = db.list(this.dbPath)
  }

  getAll(): AngularFireList<Weapon> {
    return this.ref;
  }

  create(Weapon: Weapon): any {
    return this.ref.push(Weapon);
  }

  update(key: string, value: any): Promise<void> {
    return this.ref.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.ref.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.ref.remove();
  }
}
