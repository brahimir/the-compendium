import { Component, OnInit } from "@angular/core";
// 5E Resources
import { FIFTH_EDITION_RESOURCES } from "src/environments/app-secrets";
// FormBuilder
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
// Services
import { HomebrewWeaponsService } from "../../../../../../core/resources/_services/homebrew-services/homebrew-weapons.service";

@Component({
  selector: "kt-create-weapon-dialog",
  templateUrl: "./create-weapon-dialog.component.html",
  styleUrls: ["./create-weapon-dialog.component.scss"],
})
export class CreateWeaponDialogComponent implements OnInit {
  // Flag for submission
  isSubmitted: boolean = false;

  // The form
  form: FormGroup;

  // 5E Resources
  // todo - Query 5E API to get the below metadata to allow DMs to create weapons with up-to-date
  // todo - options.
  DICE = FIFTH_EDITION_RESOURCES.GENERAL.DICE;
  RANGES = FIFTH_EDITION_RESOURCES.GENERAL.RANGES;
  RARITIES = FIFTH_EDITION_RESOURCES.GENERAL.RARITIES;
  CURRENCIES = FIFTH_EDITION_RESOURCES.GENERAL.CURRENCIES;
  WEAPON_PROPERTIES = FIFTH_EDITION_RESOURCES.WEAPONS.WEAPON_PROPERTIES;

  constructor(
    public dialogRef: MatDialogRef<CreateWeaponDialogComponent>,
    private fb: FormBuilder,
    private apiService: HomebrewWeaponsService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initializes the from.
   */
  initForm(): void {
    this.form = this.fb.group({
      generalInformation: this.fb.group({
        name: ["", Validators.required],
        weapon_category: [""],
        weapon_range: [""],
        cost_quantity: [""],
        cost_unit: ["gp"],
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
   * Saves the form to the database.
   *
   */
  onSubmit(): void {
    let formValues: any = this.form.value;

    let generalInformation: any = this.form.value.generalInformation;
    let damageAndRange: any = this.form.value.damageAndRange;
    let properties: any = this.form.value.properties;

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
        damage_type: {
          name: damageAndRange.damage_type,
        },
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

    this.apiService.create(payload).subscribe(
      (res) => {
        this.isSubmitted = true;
        this.dialogRef.close({ isisSubmitted: this.isSubmitted });
      },
      (err) => {
        this.dialogRef.close({ isisSubmitted: this.isSubmitted });
        console.log(err);
      }
    );
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
