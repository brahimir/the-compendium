import { Component, OnInit } from "@angular/core";
// FormBuilder
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: "kt-create-weapon-dialog",
  templateUrl: "./create-weapon-dialog.component.html",
  styleUrls: ["./create-weapon-dialog.component.scss"],
})
export class CreateWeaponDialogComponent implements OnInit {
  // FormGroup
  createWeaponForm: FormGroup;

  // todo - Query 5E API to get the below metadata to allow DMs to create weapons with up-to-date
  // todo - options.
  // Dice
  DICE: string[] = ["d4", "d6", "d8", "d10", "d12", "d20"];

  // Ranges
  RANGES: string[] = ["Melee", "Ranged"];

  // Currencies
  CURRENCIES: string[] = ["cp", "sp", "ep", "gp", "pp"];

  // Weapon Properties
  PROPERTIES: string[] = [
    "Ammunition",
    "Finesse",
    "Heavy",
    "Light",
    "Loading",
    "Range",
    "Reach",
    "Special",
    "Thrown",
    "Two-Handed",
    "Versatile"
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createWeaponForm = this.fb.group({
      name: [""],
      weaponCategory: [""],
      cost: this.fb.group({
        quantity: [""],
        unit: [""],
      }),
      damage: this.fb.group({
        damageDice: [""],
        damageType: [""],
      }),
      range: this.fb.group({
        normal: [""],
        long: [""],
      }),
      weight: [""],
      properties: [""],
      requiresAttunement: [""],
      rarity: [""],
      description: [""],
    });
  }

  saveWeapon(): void {}
}
