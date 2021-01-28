import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
// Models
import { currentUser, User } from "src/app/core/auth";
import { Card } from "./card.model";
import { LayoutUtilsService, MessageType } from "src/app/core/_base/crud";
// Constants
import { TC_CONSTANTS } from "src/environments/app-secrets";
// Services
import { FormattingService } from "src/app/core/resources/_services/formatting.service";
import { VirtualScreenService } from "./virtual-screen.service";
// Dialogs
import { ConfirmationDialogComponent } from "../../../components/_global-dialogs/confirmation-dialog/confirmation-dialog.component";
import { ConfirmationDialog } from "../../../components/_global-dialogs/confirmation-dialog/confirmation-dialog.model";
// Material
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

  // Dashboard Cards Array
  VIRTUAL_SCREEN_CARDS = TC_CONSTANTS.VIRTUAL_SCREEN_CARDS;

  // Add Card Dropdown value.
  addCardValue: string = "";

  // Add Dashboard Card MatSelect dropdown
  dropdownAddCard: string[] = [];

  constructor(
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
    this.refreshUserVirtualScreen();

    // Get dropdown values for the Add Card MatSelect.
    this.refreshDropdownValues();
  }

  /**
   * Gets the User's current Virtual Screen layout.
   */
  refreshUserVirtualScreen(): void {
    this.apiService.getUserVirtualScreen(this.userId).subscribe((res) => {
      this.userVirtualScreen = res.virtualScreen;
    });
  }

  /**
   *  Adds a Card to the User's Dashboard.
   *
   * @param {string} value  String representation of the Card to add
   *                        (used in the VIRTUAL_SCREEN_CARDS lookp).
   */
  addCard(value: string): void {
    // Get the index value of the Card to add.
    let cardIndex: string = value.toLowerCase();
    cardIndex = this.formattingService.replaceSpacesWithDashes(cardIndex);

    // Check if the new Cards to be created already exists in the User's Dashboard.
    if (this.isDuplicateCard(this.userVirtualScreen, cardIndex)) {
      // Display error notification.
      const message = `Oops! The ${value} Card is already on your Dashboard.`;
      this.layoutUtilsService.showActionNotification(message, MessageType.Create, 5000, true, true);

      // Reset the dropdown value.
      this.addCardValue = "";

      return;
    } else {
      // Get the Card to add from the Constants.
      let cardToAdd: any = this.VIRTUAL_SCREEN_CARDS[cardIndex];

      // Generate the Dashboard Card.
      const newCard: Card = {
        index: cardToAdd.index,
        name: cardToAdd.name,
        icon: cardToAdd.icon,
        position: {
          x: 500,
          y: 325,
        },
      };

      // Make a copy of the User's current Virtual Screen array.
      let newArray = Object.assign([], this.userVirtualScreen);

      // Add to current array of User's Dashboard Cards.
      newArray.unshift(newCard);

      // Update user's dashboard on server.
      this.apiService.updateUserVirtualScreen(this.userId, newArray).subscribe((data) => {
        if (data.status === 200) {
          // Show confirmation snackbar message.
          const message = `${newCard.name} Card successfully added.`;
          this.layoutUtilsService.showActionNotification(message, MessageType.Create, 5000, true, true);
        } else {
          // Show error snackbar message.
          const message = `There was an error trying to add the ${newCard.name} Card. Please try again.`;
          this.layoutUtilsService.showActionNotification(message, MessageType.Create, 5000, true, true);
        }

        // ! Offsets the Cards for when they get shifted when a Card is added.
        newArray.forEach((element: Card) => {
          element.position = { x: element.position.x, y: element.position.y - 115 };
        });

        // ! This call updates the screen again once the Cards have been adjusted to compensate for
        // ! the shift on Card adds.
        this.apiService.updateUserVirtualScreen(this.userId, newArray).subscribe();

        this.userVirtualScreen = newArray;

        // Update dropdown values.
        this.refreshDropdownValues();
        this.cdr.detectChanges();
      });

      // Reset the dropdown value.
      this.addCardValue = "";
      return;
    }
  }

  /**
   * Removes a Card from the Virtual Screen.
   *
   * @param {Card} card The Card to remove.
   */
  removeCard(card: Card): void {
    // Open confirmation dialog to confirm if User wants to delete the Card.
    const dialogData: ConfirmationDialog = {
      headerTitle: "Confirm Card Removal",
      confirmationMessage: `Are you sure you want to remove the ${card.name} Card?`,
      textAgreeButton: "Remove",
      textCancelButton: "Cancel",
    };

    let confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent, { data: dialogData });
    confirmationDialogRef.afterClosed().subscribe((data) => {
      // Checks for null data return.
      if (!data) return;

      // If User confirms removal.
      if (data.isConfirmed) {
        // Get index of the old Card, and replace old Card ref with new Card ref.
        const removeCardIndex = this.userVirtualScreen.indexOf(card);
        if (removeCardIndex !== -1) {
          // Create local array reference to manipulate.
          let newArray = this.userVirtualScreen;

          newArray.forEach((element: Card) => {
            if (newArray.indexOf(element) > removeCardIndex)
              element.position = { x: element.position.x, y: element.position.y + 115 };
          });

          newArray.splice(removeCardIndex, 1);

          // Update the userVirtualScreen array on the server.
          this.apiService.updateUserVirtualScreen(this.userId, newArray).subscribe((data) => {
            if (data.status === 200) {
              // Show confirmation snackbar message.
              const message = `${card.name} Card successfully removed.`;
              this.layoutUtilsService.showActionNotification(
                message,
                MessageType.Create,
                5000,
                true,
                true
              );
            } else {
              // Show error snackbar message.
              const message = `There was an error trying to remove the ${card.name} Card. Please try again.`;
              this.layoutUtilsService.showActionNotification(
                message,
                MessageType.Create,
                5000,
                true,
                true
              );
            }

            this.userVirtualScreen = newArray;

            // Update dropdown values.
            this.refreshDropdownValues();
            this.cdr.detectChanges();
          });
        }
      } else return;
    });
  }

  /**
   *  Checks if string representation of a Card's index already exists in the
   *  User's current Dashboard.
   *
   * @param {any[]} userVirtualScreenArray The User's current Dashboard.
   * @param {string} newCardIndex The string representation of the Card's index.
   * @returns {boolean}                 True if the Card already exists in the User's Dashboard,
   *                                    False otherwise.
   */
  isDuplicateCard(userVirtualScreenArray: any[], newCardIndex: string): boolean {
    let result = userVirtualScreenArray.find(({ index }) => index === newCardIndex);

    if (result) return true;
    else return false;
  }

  /**
   *  Generates a simple string array of the Cards readily available to add to a User's Dashboard.
   *
   *  Note: See  src\environments\app-secrets.ts --> TC_CONSTANTS.DASHBOARD_CONSTANTS
   */
  refreshDropdownValues(): void {
    let results: string[] = [];

    // All Screen Cards.
    let allScreenCards: any[] = Object.values(this.VIRTUAL_SCREEN_CARDS);

    // Get all the indexes of the Screen Cards.
    let allScreenCardNames: string[] = [];
    allScreenCards.forEach((element) => {
      allScreenCardNames.push(element.name);
    });

    this.apiService.getUserVirtualScreen(this.userId).subscribe((data: any) => {
      const userScreen = data.virtualScreen;

      let userScreenCardNames: string[] = [];

      // Get all the indexes of the Screen Cards.
      userScreen.forEach((element) => {
        userScreenCardNames.push(element.name);
      });

      allScreenCardNames.forEach((element) => {
        if (!userScreenCardNames.includes(element)) {
          results.push(element);
        }
      });
    });

    this.dropdownAddCard = results;
  }

  /**
   * Opens Dialogs for a Card on the Dashboard.
   *
   * @param {string} windowName The Dialog window name to open.
   */
  openDialog(windowName: string): void {
    let dialogRef: any;

    // Parse window name.
    windowName = this.formattingService.replaceSpacesWithDashes(windowName.toLowerCase());

    let cardToRender = this.VIRTUAL_SCREEN_CARDS[windowName].component;
    dialogRef = this.dialog.open(cardToRender);
  }

  /**
   * Saves the new x and y coords of the dragged Card and saves them to the server.
   *
   * @param {*} event     The drag event.
   * @param {Card} card   The Card that was dragged.
   */
  onDragEnded(event, card: Card) {
    // Get previous coords.
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
    let parentPosition = this.getPosition(element);

    // Prepare a newCard to replace the old one.
    let newCard: Card = card;

    // Calculate and update newCard coords.
    newCard.position.x = boundingClientRect.x - parentPosition.left;
    newCard.position.y = boundingClientRect.y - parentPosition.top;

    // Get index of the old Card, and replace old Card ref with new Card ref.
    const cardIndex = this.userVirtualScreen.indexOf(card);
    if (cardIndex !== -1) {
      // Create local array reference to manipulate.
      let newArray = this.userVirtualScreen;
      newArray[cardIndex] = newCard;

      // Update the userVirtualScreen array on the server.
      this.apiService.updateUserVirtualScreen(this.userId, newArray).subscribe();

      // Update client-side array to update display.
      this.userVirtualScreen = newArray;
      this.cdr.detectChanges();
    } else {
      // todo - further error handling if something goes wrong during the replacement.
      return;
    }
  }

  /**
   * Gets the position of a draggable element.
   *
   * @param {*} el  The element.
   * @returns       Object with top and left coords of the dragged element.
   */
  getPosition(el) {
    let x = 0;
    let y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: y, left: x };
  }
}
