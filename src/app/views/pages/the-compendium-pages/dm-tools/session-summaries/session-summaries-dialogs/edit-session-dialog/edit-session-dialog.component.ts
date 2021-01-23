import { Component, Inject, OnInit } from "@angular/core";
// Constants
import { CONSTANTS_CREATE_DIALOG } from "../../../create/constants";
// Services
import { LayoutUtilsService, MessageType } from "src/app/core/_base/crud";
// Models
import { User } from "src/app/core/auth";
import { Session } from "src/app/core/resources/_models/dm_tools/session_summaries/session.model";
// MatDialog
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// FormBuilder
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// RxJS
import { Observable } from "rxjs";

@Component({
  selector: "kt-edit-session-dialog",
  templateUrl: "./edit-session-dialog.component.html",
  styleUrls: ["./edit-session-dialog.component.scss"],
})
export class EditSessionDialogComponent implements OnInit {
  // Session Public properties
  sessionData: Session;
  sessionIndex: number;
  sessionSummaries: Session[];
  isEdited: boolean = false;

  // Public properties
  user$: Observable<User>;
  userId: string;
  userSessionSummaries: any[];

  // Form properties
  form: FormGroup;
  hasFormErrors = false;

  headerTitle: string = "Edit a Session Summary";

  // Error messages
  errorMessage: string = CONSTANTS_CREATE_DIALOG.ERRORS.MISSING_REQ_FIELDS;

  constructor(
    public dialogRef: MatDialogRef<EditSessionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    private layoutUtilsService: LayoutUtilsService
  ) {
    // Sets the incoming data to this Component's data references.
    this.sessionData = data.data;
    this.sessionIndex = data.index;
    this.sessionSummaries = data.sessionSummaries;
  }

  ngOnInit(): void {
    // Initialize the form.
    this.initForm();
  }

  /**
   * Initializes the form.
   */
  initForm(): void {
    this.form = this.fb.group({
      chapter: [this.sessionData.chapter, Validators.required],
      episode: [this.sessionData.episode, Validators.required],
      content: [this.sessionData.content, Validators.required],
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
      date: new Date().toISOString(),
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

    // Close the dialog, and send the payload back to the SessionSummariesDetailsComponent.
    this.dialogRef.close(payload);

    // Show confirmation snackbar message.
    const message = "Session Summary successfully updated.";
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
