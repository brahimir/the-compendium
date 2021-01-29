import { Component, Inject, OnInit } from "@angular/core";
// Constants
import { CONSTANTS_CREATE_DIALOG } from "../../../create/constants";
// Models
import { CombatUnit } from "../../_models/combat-unit.model";
// FormBuilder
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// MatDialog
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "kt-edit-unit-dialog",
  templateUrl: "./edit-unit-dialog.component.html",
  styleUrls: ["./edit-unit-dialog.component.scss"],
})
export class EditUnitDialogComponent implements OnInit {
  // Public properties
  form: FormGroup;
  hasFormErrors = false;

  unit: CombatUnit;

  // Error messages
  errorMessage: string = CONSTANTS_CREATE_DIALOG.ERRORS.MISSING_REQ_FIELDS;

  constructor(
    public dialogRef: MatDialogRef<EditUnitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder
  ) {
    // Get Unit metadata from the data.
    this.unit = data.unit;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [this.unit.name, Validators.required],
      hitpoints: [this.unit.hitpoints],
      initiative: [this.unit.initiative, Validators.required],
    });
  }

  preparePayload(): Object {
    let formValues = this.form.value;

    let payload: CombatUnit = {
      name: formValues.name,
      hitpoints: formValues.hitpoints,
      initiative: formValues.initiative,
    };

    return payload;
  }

  /**
   * Form on Submit.
   */
  onSubmit(): void {
    this.hasFormErrors = false;
    const controls = this.form.controls;

    // Check form for errors.
    if (this.form.invalid) {
      Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());

      this.hasFormErrors = true;
      return;
    }

    // Prepare payload.
    let payload = this.preparePayload();

    // Close the dialog, and send the payload back to the StoryboardComponent.
    this.dialogRef.close(payload);
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
