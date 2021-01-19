import { Component, OnInit } from "@angular/core";
// Constants
import { CONSTANTS_CREATE_DIALOG } from "../../constants";
// 5E Resources
import { FIFTH_EDITION_RESOURCES } from "src/environments/app-secrets";
// FormBuilder
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
// Services
import { HomebrewItemsService } from "../../../../../../../core/resources/_services/homebrew-services/homebrew-items.service";

@Component({
  selector: "kt-create-item-dialog",
  templateUrl: "./create-item-dialog.component.html",
  styleUrls: ["./create-item-dialog.component.scss"],
})
export class CreateItemDialogComponent implements OnInit {
  // Public properties
  form: FormGroup;
  hasFormErrors = false;
  isSubmitted: boolean = false;
  // Error messages
  errorMessage: string = CONSTANTS_CREATE_DIALOG.ERRORS.MISSING_REQ_FIELDS;

  // 5E Resources
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
        cost_quantity: ["", Validators.required],
        cost_unit: ["gp", Validators.required],
        weight: [""],
        description: ["", Validators.required],
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

    // Prepare payload.
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
  }

  preparePayload(): any {
    let formValues: any = this.form.value;
    let generalInformation: any = this.form.value.generalInformation;

    let payload = {
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
      desc: generalInformation.description,
    };

    return payload;
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
