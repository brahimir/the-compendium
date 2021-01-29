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
  selector: "kt-add-unit-dialog",
  templateUrl: "./add-unit-dialog.component.html",
  styleUrls: ["./add-unit-dialog.component.scss"],
})
export class AddUnitDialogComponent implements OnInit {
  // Public properties
  form: FormGroup;
  hasFormErrors = false;

  // Title of the Combat Instance (if any)
  combatInstanceTitle: string = "";

  // Error messages
  errorMessage: string = CONSTANTS_CREATE_DIALOG.ERRORS.MISSING_REQ_FIELDS;

  constructor(
    public dialogRef: MatDialogRef<AddUnitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder
  ) {
    // Set the Combat Title for the Dialog if one was passed.
    if (data.combatInstanceTitle) {
      this.combatInstanceTitle = data.combatInstanceTitle;
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      hitpoints: [null],
      initiative: [null, Validators.required],
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
