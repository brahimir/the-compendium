import { Component, Inject, OnInit } from "@angular/core";
// Constants
import { CONSTANTS_CREATE_DIALOG } from "../../constants";
// Models
import { currentUser, User } from "src/app/core/auth";
import { Session } from "src/app/core/resources/_models/dm_tools/session_summaries/session.model";
// Services
import { LayoutUtilsService, MessageType } from "src/app/core/_base/crud";
// MatDialog
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// FormBuilder
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SessionSummariesService } from "src/app/views/pages/the-compendium-pages/dm-tools/session-summaries/session-summaries.service";
// State
import { AppState } from "src/app/core/reducers";
import { select, Store } from "@ngrx/store";
// RxJS
import { Observable } from "rxjs";

@Component({
  selector: "kt-create-session-dialog",
  templateUrl: "./create-session-dialog.component.html",
  styleUrls: ["./create-session-dialog.component.scss"],
})
export class CreateSessionDialogComponent implements OnInit {
  // Public properties
  user$: Observable<User>;
  userId: string;
  userSessionSummaries: Session[];

  // Form properties
  form: FormGroup;
  hasFormErrors = false;

  headerTitle: string = "Create a Session Summary";

  // Error messages
  errorMessage: string = CONSTANTS_CREATE_DIALOG.ERRORS.MISSING_REQ_FIELDS;

  constructor(
    public dialogRef: MatDialogRef<CreateSessionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private store: Store<AppState>,
    private fb: FormBuilder,
    private apiService: SessionSummariesService,
    private layoutUtilsService: LayoutUtilsService
  ) {}

  ngOnInit(): void {
    // todo - This is getting a "snapshot" of the user - on refresh, the User Observable doesn't have
    // todo - "data" to subscribe to - need to fix this.
    this.user$ = this.store.pipe(select(currentUser));
    this.user$.subscribe((user) => {
      // Get the User's ID
      this.userId = user._id;
    });

    // Initialize the form.
    this.initForm();

    // Get updated Session Summaries array.
    this.refreshSessions();
  }

  /**
   * Initializes the form.
   */
  initForm(): void {
    this.form = this.fb.group({
      chapter: ["", Validators.required],
      episode: ["", Validators.required],
      content: ["", Validators.required],
      // todo - implement a datepicker here to let the user select their own date (recording a session form the past?)
    });
  }

  refreshSessions(): void {
    this.apiService.getSessionSummaries(this.userId).subscribe((sessions: Session[]) => {
      this.userSessionSummaries = sessions;
    });
  }

  /**
   * Prepare the form payload for submission to server.
   *
   * @returns {Object} The payload Object.
   */
  preparePayload(): Session {
    let formValues = this.form.value;

    let payload: Session = {
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
      Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());

      this.hasFormErrors = true;
      return;
    }

    // Prepare payload.
    let payload = this.preparePayload();

    // Add the new Session Summary to the existing Session Summaries.
    let newArray: Session[] = Object.assign([], this.userSessionSummaries);
    newArray.push(payload);

    // Update User Session Summaries on server.
    this.apiService.updateSessionSummaries(this.userId, newArray).subscribe((res) => {
      if (res.status === 200) {
        // Show confirmation snackbar message.
        const message = "Session Summary successfully added.";
        this.layoutUtilsService.showActionNotification(message, MessageType.Create, 5000, true, true);
      } else {
        // Show error snackbar message.
        const message = "There was a problem adding your Session Summary. Please try again.";
        this.layoutUtilsService.showActionNotification(message, MessageType.Create, 5000, true, true);
      }
    });

    this.dialogRef.close();
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
