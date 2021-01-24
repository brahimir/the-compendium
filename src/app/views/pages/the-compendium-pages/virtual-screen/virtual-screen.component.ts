import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// Models
import { currentUser, User } from "src/app/core/auth";
import { Card } from "./card.model";
import { LayoutUtilsService, MessageType } from "src/app/core/_base/crud";
// Constants
import { TC_CONSTANTS } from "src/environments/app-secrets";
// Services
import { FormattingService } from "src/app/core/resources/_services/formatting.service";
import { VirtualScreenService } from "./virtual-screen.service";
// MatDialog
import { MatDialog } from "@angular/material/dialog";
// State
import { AppState } from "src/app/core/reducers";
// NGRX
import { select, Store } from "@ngrx/store";
// RxJS
import { Observable } from "rxjs";

@Component({
  selector: "kt-virtual-screen",
  templateUrl: "./virtual-screen.component.html",
  styleUrls: ["./virtual-screen.component.scss"],
})
export class VirtualScreenComponent implements OnInit {
  // Public properties
  user$: Observable<User>;
  userId: string;
  userVirtualScreen: Object[];

  // Dashboard Components Array
  VIRTUAL_SCREEN_COMPONENTS = TC_CONSTANTS.VIRTUAL_SCREEN_COMPONENTS;

  // Add Component Dropdown value.
  addCardValue: string = "";

  // Add Dashboard Component MatSelect dropdown
  VIRTUAL_SCREEN_DROPDOWN: string[] = [];

  constructor(
    public router: Router,
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    private apiService: VirtualScreenService,
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
    this.apiService.getUserVirtualScreen(this.userId).subscribe((screen) => {
      this.userVirtualScreen = screen;
    });

    // ? This is a good fix for "refreshing" and re-obtaining the Observable User.
    // this.manualRefresh();
    // this.cdr.detectChanges();
  }

  /**
   *  Adds a Component to the User's Dashboard.
   *
   * @param {string} value  String representation of the Component to add
   *                        (used in the VIRTUAL_SCREEN_COMPONENTS lookp).
   */
  addCard(value: string): void {
    let componentIndex: string = value.toLowerCase();
    componentIndex = this.formattingService.replaceSpacesWithDashes(
      componentIndex
    );

    // Add the new component via API call.
    // Get User's current Dashboard.
    this.apiService.getUserVirtualScreen(this.userId).subscribe((screen) => {
      let userVirtualScreen = screen;

      // Check if the new Component to be created already exists in the User's Dashboard.
      if (this.isDuplicateComponent(userVirtualScreen, componentIndex)) {
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
        let componentToAdd: any = this.VIRTUAL_SCREEN_COMPONENTS[
          componentIndex
        ];

        // Generate the Dashboard Card.
        const newComponent = new Card(
          componentToAdd.index,
          componentToAdd.name,
          componentToAdd.icon
        );

        // Add to current array of User's Dashboard Components.
        let newArray = Object.assign([], userVirtualScreen);
        newArray.push(newComponent);

        // todo - update user's dashboard on server.
        this.apiService
          .updateUserVirtualScreen(this.userId, newArray)
          .subscribe();

        // ? This updates the local copy of the userDashboard so the DOM can be updated
        // ? - bypasses the issue with refreshing the page into an undefined User Observable
        this.userVirtualScreen = newArray;
        this.cdr.detectChanges();

        // Show confirmation snackbar message.
        const message = `${value} Component successfully added.`;
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
  removeCard(value: string): void {}

  /**
   *  Checks if string representation of a Component's index already exists in the
   *  User's current Dashboard.
   *
   * @param {any[]} userVirtualScreenArray  The User's current Dashboard.
   * @param {string} newComponentIndex  The string representation of the Component's index.
   * @returns {boolean}                 True if the Component already exists in the User's Dashboard,
   *                                    False otherwise.
   */
  isDuplicateComponent(
    userVirtualScreenArray: any[],
    newComponentIndex: string
  ): boolean {
    let result = userVirtualScreenArray.find(
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
    let virtualScreenComponents = Object.values(this.VIRTUAL_SCREEN_COMPONENTS);

    virtualScreenComponents.forEach((element) => {
      result.push(element.name);
    });

    this.VIRTUAL_SCREEN_DROPDOWN = result;
  }

  // todo --
  filterDropdownValues(): void {}

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

    let componentToRender = this.VIRTUAL_SCREEN_COMPONENTS[windowName]
      .component;
    dialogRef = this.dialog.open(componentToRender);
  }

  // todo - maybe look into this?
  manualRefresh(): void {
    this.router.navigateByUrl("/weapons");
    this.router.navigateByUrl("/dashboard");
  }
}
