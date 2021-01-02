import { Component, OnInit } from "@angular/core";
// FormBuilder
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { validators } from "src/assets/plugins/formvalidation/src/js";
// Services
import { HomebrewWeaponsService } from "../../../../../../core/resources/_services/homebrew-services/homebrew-weapons.service";

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
    "TwoHanded",
    "Versatile",
  ];

  constructor(
    private fb: FormBuilder,
    private homebrewWeaponsService: HomebrewWeaponsService
  ) {}

  ngOnInit(): void {
    this.createWeaponForm = this.fb.group({
      generalInformation: this.fb.group({
        name: ["", validators.notEmpty],
        weapon_category: [""],
        weapon_range: [""],
        cost_quantity: [""],
        cost_unit: [""],
        weight: [""],
        requires_attunement: [""],
        rarity: [""],
      }),
      damageAndRange: this.fb.group({
        damage_dice_number: [""],
        damage_dice_die: [""],
        damage_type: [""],
        range_normal: [""],
        range_long: [""],
      }),
      properties: this.fb.group({
        properties_Ammunition: [false],
        properties_Finesse: [false],
        properties_Heavy: [false],
        properties_Light: [false],
        properties_Loading: [false],
        properties_Range: [false],
        properties_Reach: [false],
        properties_Special: [false],
        properties_Thrown: [false],
        properties_TwoHanded: [false],
        properties_Versatile: [false],
      }),
      description: [""],
    });
  }

  /**
   * Saves the created Homebrew Weapon to the database.
   *
   */
  saveWeapon(): void {
    let formValues: any = this.createWeaponForm.value;

    let generalInformation: any = this.createWeaponForm.value
      .generalInformation;
    let damageAndRange: any = this.createWeaponForm.value.damageAndRange;
    let properties: any = this.createWeaponForm.value.properties;

    console.log(properties);

    // Prepare payload to POST.
    let payload: any = {
      // start:: Official Schema
      name: generalInformation.name,
      weapon_category: generalInformation.weapon_category,
      weapon_range: generalInformation.weapon_range,
      cost: {
        quantity: generalInformation.cost_quantity,
        unit: generalInformation.cost_unit,
      },
      damage: {
        damage_dice:
          damageAndRange.damage_dice_number + damageAndRange.damage_dice_die,
        damage_type: damageAndRange.damage_type,
      },
      range: {
        normal: damageAndRange.range_normal,
        long: damageAndRange.range_long,
      },
      weight: generalInformation.weight,
      properties: this.getPropertiesArray(properties),
      // end:: Official Schema
      requires_attunement: generalInformation.requires_attunement,
      rarity: generalInformation.rarity,
      desc: [formValues.description],
    };

    console.warn("payload");
    console.log(payload);

    this.homebrewWeaponsService.create(payload);
  }

  /**
   * Returns on array of Property Objects from truthy checkboxes (for use in api POST).
   *
   * @param {*} array The properties to parse and check.
   * @returns {Object[]} An array of Property Objects.
   */
  getPropertiesArray(array: any): Object[] {
    let results: any[] = [];

    for (let property in array) {
      if (array[property]) {
        let propertyName: string;
        propertyName = property.split("_")[1];

        results.push({
          name: propertyName,
        });
      }
    }

    return results;
  }
}
