import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// Models
import { currentUser, User } from "src/app/core/auth";
import { DashboardCard } from "./dashboard-card.model";
import { LayoutUtilsService, MessageType } from "src/app/core/_base/crud";
// Constants
import { TC_CONSTANTS } from "src/environments/app-secrets";
// Services
import { FormattingService } from "src/app/core/resources/_services/formatting.service";
import { DashboardService } from "./dashboard.service";
// MatDialog
import { MatDialog } from "@angular/material/dialog";
// State
import { AppState } from "src/app/core/reducers";
// NGRX
import { select, Store } from "@ngrx/store";
// RxJS
import { Observable } from "rxjs";

@Component({
  selector: "kt-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  // Public properties
  user$: Observable<User>;
  userId: string;
  userDashboard: Object[];

  // Dashboard Components Array
  DASHBOARD_COMPONENTS = TC_CONSTANTS.DASHBOARD_COMPONENTS;

  // Add Dashboard Component MatSelect dropdown
  DASHBOARD_DROPDOWN: string[] = [];

  constructor(
    public router: Router,
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    private apiService: DashboardService,
    public formattingService: FormattingService,
    private layoutUtilsService: LayoutUtilsService
  ) {}

  ngOnInit(): void {
    // todo - This is getting a "snapshot" of the user - on refresh, the User Observable doesn't have
    // todo - "data" to subscribe to - need to fix this.
    this.user$ = this.store.pipe(select(currentUser));
    this.user$.subscribe((user: User) => {
      this.userId = user._id;
    });

    // Get User's current Dashboard.
    this.refreshUserDashboard();

    // Get dropdown values for the Add Component MatSelect.
    this.getDropdownValues();
  }

  refreshUserDashboard(): void {
    this.apiService.getUserDashboard(this.userId).subscribe((dashboard) => {
      this.userDashboard = dashboard;
    });
    this.cdr.detectChanges();

    // ? This is a good fix for "refreshing" and re-obtaining the Observable User.
    this.router.navigateByUrl("/weapons");
    this.router.navigateByUrl("/dashboard");
  }

  /**
   *  Adds a Component to the User's Dashboard.
   *
   * @param {string} value  String representation of the Component to add
   *                        (used in the DASHBOARD_COMPONENTS lookp).
   */
  addComponent(value: string): void {
    let componentIndex: string = value.toLowerCase();
    componentIndex = this.formattingService.replaceSpacesWithDashes(
      componentIndex
    );

    // Add the new component via API call.
    this.user$.subscribe((user: User) => {
      // Get User's current Dashboard.
      let userDashboard = user.userSettings.dashboard;

      // Check if the new Component to be created already exists in the User's Dashboard.
      if (this.isDuplicateComponent(userDashboard, componentIndex)) {
        // Display error notification.
        const message = `Oops! The ${value} Component is already on your Dashboard.`;
        this.layoutUtilsService.showActionNotification(
          message,
          MessageType.Create,
          5000,
          true,
          true
        );
        return;
      } else {
        // Get the Component to add from the Constants.
        let componentToAdd: any = this.DASHBOARD_COMPONENTS[componentIndex];

        // Generate the Dashboard Card.
        const newComponent = new DashboardCard(
          componentToAdd.index,
          componentToAdd.name,
          componentToAdd.icon
        );

        // Add to current array of User's Dashboard Components.
        let newArray = Object.assign([], userDashboard);
        newArray.push(newComponent);

        console.log(newArray);

        // todo - update user's dashboard on server.
        this.apiService.updateUserDashboard(this.userId, newArray).subscribe();
        this.refreshUserDashboard();

        // Show confirmation snackbar message.
        const message = "Dashboard Component successfully added.";
        this.layoutUtilsService.showActionNotification(
          message,
          MessageType.Create,
          5000,
          true,
          true
        );
      }
    });
  }

  // todo --
  removeComponent(value: string): void {}

  /**
   *  Checks if string representation of a Component's index already exists in the
   *  User's current Dashboard.
   *
   * @param {any[]} userDashboardArray  The User's current Dashboard.
   * @param {string} newComponentIndex  The string representation of the Component's index.
   * @returns {boolean}                 True if the Component already exists in the User's Dashboard,
   *                                    False otherwise.
   */
  isDuplicateComponent(
    userDashboardArray: any[],
    newComponentIndex: string
  ): boolean {
    let result = userDashboardArray.find(
      ({ index }) => index === newComponentIndex
    );

    if (result) return true;
    else return false;
  }

  /**
   *  Generates a simple string array of the Components readily available to add to a User's Dashboard.
   *
   *  Note: See  src\environments\app-secrets.ts --> TC_CONSTANTS.DASHBOARD_CONSTANTS
   */
  getDropdownValues(): void {
    let result: string[] = [];
    let dashboardComponents = Object.values(this.DASHBOARD_COMPONENTS);

    dashboardComponents.forEach((element) => {
      result.push(element.name);
    });

    this.DASHBOARD_DROPDOWN = result;
  }

  /**
   * Opens Dialogs for each component on the Dashboard.
   *
   * @param {string} windowName The Dialog window name to open.
   */
  openDialog(windowName: string): void {
    let dialogRef: any;

    // Parse window name.
    windowName = this.formattingService.replaceSpacesWithDashes(
      windowName.toLowerCase()
    );

    let componentToRender = this.DASHBOARD_COMPONENTS[windowName].component;
    dialogRef = this.dialog.open(componentToRender);
  }
}
