import { Component, OnInit, Inject } from "@angular/core";
// Constants
import { CONSTANTS_CREATE_DIALOG } from "../../../create/constants";
// Services
import { LayoutUtilsService, MessageType } from "src/app/core/_base/crud";
// MatDialog
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// FormBuilder
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "kt-edit-plot-dialog",
  templateUrl: "./edit-plot-dialog.component.html",
  styleUrls: ["./edit-plot-dialog.component.scss"],
})
export class EditPlotDialogComponent implements OnInit {
  // Public properties
  form: FormGroup;
  hasFormErrors = false;

  // Header title
  headerTitle: string;

  // Plot metadata
  plotTitle: string;
  plotDescription: string;

  // Error messages
  errorMessage: string = CONSTANTS_CREATE_DIALOG.ERRORS.MISSING_REQ_FIELDS;

  constructor(
    public dialogRef: MatDialogRef<EditPlotDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    private layoutUtilsService: LayoutUtilsService
  ) {
    // Set the title for the Dialog.
    this.headerTitle = data.headerTitle;
    this.plotTitle = data.plotTitle;
    this.plotDescription = data.plotDescription;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      title: [this.plotTitle, Validators.required],
      description: [this.plotDescription],
    });
  }

  preparePayload(): Object {
    let formValues = this.form.value;

    let payload: any = {
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
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );

      this.hasFormErrors = true;
      return;
    }

    // Prepare payload.
    let payload = this.preparePayload();

    // Close the dialog, and send the payload back to the StoryboardComponent.
    this.dialogRef.close(payload);

    // Show confirmation snackbar message.
    const message = "Plot successfully updated.";
    this.layoutUtilsService.showActionNotification(
      message,
      MessageType.Create,
      5000,
      true,
      true
    );
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
