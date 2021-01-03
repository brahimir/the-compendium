import { Component, OnInit } from "@angular/core";
// 5E Resources
import { FIFTH_EDITION_RESOURCES } from "src/environments/app-secrets";
// FormBuilder
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
// Services
import { HomebrewItemsService } from "../../../../../../core/resources/_services/homebrew-services/homebrew-items.service";

@Component({
  selector: "kt-create-item-dialog",
  templateUrl: "./create-item-dialog.component.html",
  styleUrls: ["./create-item-dialog.component.scss"],
})
export class CreateItemDialogComponent implements OnInit {
  // Flag for submission
  isSubmitted: boolean = false;

  // The form
  form: FormGroup;

  // 5E Resources
  // todo - Query 5E API to get the below metadata to allow DMs to create weapons with up-to-date
  // todo - options.
  RARITIES = FIFTH_EDITION_RESOURCES.GENERAL.RARITIES;
  CURRENCIES = FIFTH_EDITION_RESOURCES.GENERAL.CURRENCIES;

  constructor(
    public dialogRef: MatDialogRef<CreateItemDialogComponent>,
    private fb: FormBuilder,
    private apiService: HomebrewItemsService
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
        equipment_category: [""],
        cost_quantity: [""],
        cost_unit: ["gp"],
        weight: [""],
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

    // Prepare payload to POST.
    let payload: any = {
      name: generalInformation.name,
      equipment_category: {
        name: generalInformation.equipment_category,
      },
      gear_category: {},
      cost: {
        quantity: generalInformation.cost_quantity,
        unit: generalInformation.cost_unit,
      },
      weight: generalInformation.weight,
      desc: formValues.description,
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
}
