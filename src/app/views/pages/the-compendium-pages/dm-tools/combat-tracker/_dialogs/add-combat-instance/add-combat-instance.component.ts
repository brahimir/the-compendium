import { Component, Inject, OnInit } from "@angular/core";
// Constants
import { CONSTANTS_CREATE_DIALOG } from "../../../create/constants";
// Models
import { CombatUnit } from "../../_models/combat-unit.model";
// FormBuilder
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// MatDialog
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CombatInstance } from "../../_models/combat-instance.model";

@Component({
  selector: "kt-add-combat-instance",
  templateUrl: "./add-combat-instance.component.html",
  styleUrls: ["./add-combat-instance.component.scss"],
})
export class AddCombatInstanceComponent implements OnInit {
  // Public properties
  form: FormGroup;
  hasFormErrors = false;

  // Error messages
  errorMessage: string = CONSTANTS_CREATE_DIALOG.ERRORS.MISSING_REQ_FIELDS;

  constructor(
    public dialogRef: MatDialogRef<AddCombatInstanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
    });
  }

  preparePayload(): Object {
    let formValues = this.form.value;

    let payload: CombatInstance = {
      name: formValues.name,
      units: [],
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
