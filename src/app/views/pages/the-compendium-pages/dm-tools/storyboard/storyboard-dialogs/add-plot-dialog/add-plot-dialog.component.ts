import { Component, OnInit, Inject } from "@angular/core";
// Constants
import { CONSTANTS_CREATE_DIALOG } from "../../../create/constants";
// Models
import { Plot } from "../../_models/plot.model";
// Services
import { LayoutUtilsService, MessageType } from "src/app/core/_base/crud";
// MatDialog
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// FormBuilder
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "kt-add-plot-dialog",
  templateUrl: "./add-plot-dialog.component.html",
  styleUrls: ["./add-plot-dialog.component.scss"],
})
export class AddPlotDialogComponent implements OnInit {
  // Public properties
  form: FormGroup;
  hasFormErrors = false;

  // Header title
  plot: string;

  // Error messages
  errorMessage: string = CONSTANTS_CREATE_DIALOG.ERRORS.MISSING_REQ_FIELDS;

  constructor(
    public dialogRef: MatDialogRef<AddPlotDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    private layoutUtilsService: LayoutUtilsService
  ) {
    // Set the title for the Dialog.
    this.plot = data.plot;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      title: ["", Validators.required],
      description: [""],
    });
  }

  preparePayload(): Plot {
    let formValues = this.form.value;

    let payload: Plot = {
      title: formValues.title,
      description: formValues.description,
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
