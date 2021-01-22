import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// Models
import { currentUser, User } from "src/app/core/auth";
// Constants
import { TC_CONSTANTS } from "src/environments/app-secrets";
// Services
import { FormattingService } from "src/app/core/resources/_services/formatting.service";
// MatDialog
import { MatDialog } from "@angular/material/dialog";
// State
import { AppState } from "src/app/core/reducers";
// RxJS
import { Observable } from "rxjs";
// NGRX
import { select, Store } from "@ngrx/store";
// Components
// Official
import { WeaponsComponent } from "../_resource-tables/official/weapons/weapons.component";
import { ArmorsComponent } from "../_resource-tables/official/armor/armor.component";
import { NpcsComponent } from "../_resource-tables/official/npcs/npcs.component";
import { ItemsComponent } from "../_resource-tables/official/items/items.component";
import { SpellsComponent } from "../_resource-tables/official/spells/spells.component";
// Homebrew
import { HomebrewWeaponsComponent } from "../_resource-tables/homebrew/homebrew-weapons/homebrew-weapons.component";
import { HomebrewArmorsComponent } from "../_resource-tables/homebrew/homebrew-armor/homebrew-armor.component";
import { HomebrewItemsComponent } from "../_resource-tables/homebrew/homebrew-items/homebrew-items.component";
import { HomebrewNpcsComponent } from "../_resource-tables/homebrew/homebrew-npcs/homebrew-npcs.component";
import { HomebrewSpellsComponent } from "../_resource-tables/homebrew/homebrew-spells/homebrew-spells.component";

@Component({
  selector: "kt-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  // Public properties
  user$: Observable<User>;
  userId: string;

  // Dashboard Components Array
  DASHBOARD_COMPONENTS = TC_CONSTANTS.DASHBOARD_COMPONENTS;

  constructor(
    public router: Router,
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    public formattingService: FormattingService
  ) {}

  ngOnInit(): void {
    // todo - This is getting a "snapshot" of the user - on refresh, the User Observable doesn't have
    // todo - "data" to subscribe to - need to fix this.
    this.user$ = this.store.pipe(select(currentUser));
    // this.user$.subscribe((user: User) => {
    //   this.userId = user._id;
    // });
  }

  getUserDashboard(): Observable<any> {
    return;
  }

  /**
   * Opens Dialogs for each component on the Dashboard.
   * todo - pass the Component in DASHBOARD_COMPONENTS to this function after reading User's Dashboard.
   *
   * @param {string} windowName The Dialog window name to open.
   */
  openDialog(windowName: string): void {
    let dialogRef: any;

    console.log(this.DASHBOARD_COMPONENTS);
    let componentToRender = this.DASHBOARD_COMPONENTS[windowName];

    dialogRef = this.dialog.open(componentToRender);
  }
}
