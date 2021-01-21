import { Component, OnInit } from "@angular/core";
// Constants
import { CONSTANTS_CREATE_DIALOG } from "../../constants";
// 5E Resources
import { FIFTH_EDITION_RESOURCES } from "src/environments/app-secrets";
// FormBuilder
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
// Services
import { HomebrewWeaponsService } from "../../../../../../../core/resources/_services/homebrew-services/homebrew-weapons.service";
import { FormattingService } from "src/app/core/resources/_services/formatting.service";
import { LayoutUtilsService, MessageType } from "src/app/core/_base/crud";

@Component({
  selector: "kt-create-weapon-dialog",
  templateUrl: "./create-weapon-dialog.component.html",
  styleUrls: ["./create-weapon-dialog.component.scss"],
})
export class CreateWeaponDialogComponent implements OnInit {
  // Public properties
  form: FormGroup;
  hasFormErrors = false;
  isSubmitted: boolean = false;
  headerTitle: string = "Create Homebrew Weapon";

  // Error messages
  errorMessage: string = CONSTANTS_CREATE_DIALOG.ERRORS.MISSING_REQ_FIELDS;

  // 5E Resources
  DICE = FIFTH_EDITION_RESOURCES.GENERAL.DICE;
  RANGES = FIFTH_EDITION_RESOURCES.GENERAL.RANGES;
  RARITIES = FIFTH_EDITION_RESOURCES.GENERAL.RARITIES;
  CURRENCIES = FIFTH_EDITION_RESOURCES.GENERAL.CURRENCIES;
  WEAPON_PROPERTIES = FIFTH_EDITION_RESOURCES.WEAPONS.WEAPON_PROPERTIES;

  constructor(
    public dialogRef: MatDialogRef<CreateWeaponDialogComponent>,
    private fb: FormBuilder,
    private apiService: HomebrewWeaponsService,
    private formattingService: FormattingService,
    private layoutUtilsService: LayoutUtilsService
  ) {
    this.WEAPON_PROPERTIES = this.formattingService.arrayReplaceSpacesWithUnderscores(
      this.WEAPON_PROPERTIES
    );
  }

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
        cost_quantity: ["", Validators.required],
        cost_unit: ["gp", Validators.required],
        weight: [""],
        requires_attunement: [""],
        rarity: ["", Validators.required],
        description: ["", Validators.required],
      }),
      damageAndRange: this.fb.group({
        damage_dice_number: ["", Validators.required],
        damage_dice_die: ["", Validators.required],
        damage_type: ["", Validators.required],
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
        properties_Two_Handed: [false],
        properties_Versatile: [false],
      }),
    });
  }

  /**
   * Saves the form to the database.
   *
   */
  onSubmit(): void {
    this.hasFormErrors = false;
    const formGroups = this.form.controls;

    // Check form for errors.
    if (this.form.invalid) {
      // FormGroups
      Object.keys(formGroups).forEach((formgroupName) => {
        let nestedControls = formGroups[formgroupName]["controls"];

        // Nested Controls in FormGroups
        Object.keys(nestedControls).forEach((nestedControlName) => {
          nestedControls[nestedControlName].markAsTouched();
        });
      });

      this.hasFormErrors = true;
      return;
    }

    let payload = this.preparePayload();

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

    // Show confirmation snackbar message.
    const message = "Homebrew Weapon successfully added.";
    this.layoutUtilsService.showActionNotification(
      message,
      MessageType.Create,
      10000,
      true,
      true
    );
  }

  preparePayload(): any {
    let formValues: any = this.form.value;

    let generalInformation: any = this.form.value.generalInformation;
    let damageAndRange: any = this.form.value.damageAndRange;
    let properties: any = this.form.value.properties;

    let payload: any = {
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
      desc: [generalInformation.description],
    };

    return payload;
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

  /**
   * Alert close event
   *
   * @param {*} $event
   */
  onAlertClose($event) {
    this.hasFormErrors = false;
  }
}
