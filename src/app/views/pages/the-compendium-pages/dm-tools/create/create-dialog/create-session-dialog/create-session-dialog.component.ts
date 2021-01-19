import { Component, Inject, OnInit } from "@angular/core";
// Constants
import { CONSTANTS_CREATE_DIALOG } from "../../constants";
// MatDialog
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// FormBuilder
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SessionSummariesService } from "src/app/core/resources/_services/dm-tools-services/session_summaries.service";

@Component({
  selector: "kt-create-session-dialog",
  templateUrl: "./create-session-dialog.component.html",
  styleUrls: ["./create-session-dialog.component.scss"],
})
export class CreateSessionDialogComponent implements OnInit {
  // Public properties
  form: FormGroup;
  hasFormErrors = false;

  headerTitle: string = "Create a Session Summary";

  // Error messages
  errorMessage: string = CONSTANTS_CREATE_DIALOG.ERRORS.MISSING_REQ_FIELDS;

  constructor(
    public dialogRef: MatDialogRef<CreateSessionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    private apiService: SessionSummariesService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initializes the form.
   */
  initForm(): void {
    this.form = this.fb.group({
      chapter: ["", Validators.required],
      episode: ["", Validators.required],
      content: ["", Validators.required],
    });
  }

  /**
   * Prepare the form payload for submission to server.
   *
   * @returns {Object} The payload Object.
   */
  preparePayload(): Object {
    let formValues = this.form.value;

    let payload: any = {
      chapter: formValues.chapter,
      episode: formValues.episode,
      content: formValues.content,
    };

    return payload;
  }

  /**
   * Form onSubmit.
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
