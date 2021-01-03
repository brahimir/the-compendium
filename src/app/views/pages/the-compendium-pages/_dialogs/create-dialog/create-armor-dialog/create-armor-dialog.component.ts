import { Component, OnInit } from "@angular/core";
// 5E Resources
import { FIFTH_EDITION_RESOURCES } from "src/environments/app-secrets";
// FormBuilder
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
// Services
import { HomebrewArmorsService } from "../../../../../../core/resources/_services/homebrew-services/homebrew-armors.service";

@Component({
  selector: "kt-create-armor-dialog",
  templateUrl: "./create-armor-dialog.component.html",
  styleUrls: ["./create-armor-dialog.component.scss"],
})
export class CreateArmorDialogComponent implements OnInit {
  // Flag for submission
  isSubmitted: boolean = false;

  // Create Weapon Form
  form: FormGroup;

  // 5E Resources
  CURRENCIES = FIFTH_EDITION_RESOURCES.CURRENCIES
  RARITIES = FIFTH_EDITION_RESOURCES.RARITIES
  ARMOR_CATEGORIES = FIFTH_EDITION_RESOURCES.ARMOR_CATEGORIES
  
  constructor(
    public dialogRef: MatDialogRef<CreateArmorDialogComponent>,
    private fb: FormBuilder,
    private homebrewWeaponsService: HomebrewArmorsService
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
        armor_category: [""],
        weight: [""],
        cost_quantity: [""],
        cost_unit: ["gp"],
        requires_attunement: [false],
        rarity: [""],
      }),
      armorClassAndRequirements: this.fb.group({
        armor_class_base: ["", Validators.required],
        armor_class_dex_bonus: [false],
        armor_class_max_bonus: [""],
        stealth_disadvantage: [false],
        str_minimum: [0],
      }),
      description: [""],
    });
  }

  /**
   * Saves the form to the database.
   *
   */
  saveForm(): void {
    let formValues: any = this.form.value;

    let generalInformation: any = this.form.value.generalInformation;
    let armorClassAndRequirements: any = this.form.value.armorClassAndRequirements;

    // Prepare payload to POST.
    let payload: any = {
      name: generalInformation.name,
      armor_category: generalInformation.armor_category,
      armor_class: {
        base: armorClassAndRequirements.armor_class_base,
        dex_bonus: armorClassAndRequirements.armor_class_dex_bonus,
        max_bonus: armorClassAndRequirements.armor_class_max_bonus,
      },
      str_minimum: armorClassAndRequirements.str_minimum,
      stealth_disadvantage: armorClassAndRequirements.stealth_disadvantage,
      weight: generalInformation.weight,
      cost: {
        quantity: generalInformation.cost_quantity,
        unit: generalInformation.cost_unit,
      },
      requires_attunement: generalInformation.requires_attunement,
      rarity: generalInformation.rarity,
      desc: [formValues.description],
    };

    this.homebrewWeaponsService.create(payload).subscribe(
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
}
