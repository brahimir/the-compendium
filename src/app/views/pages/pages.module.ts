// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// Partials
import { PartialsModule } from "../partials/partials.module";

// Angular Marterial and Data Table
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from "@angular/material-moment-adapter";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTreeModule } from "@angular/material/tree";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatChipsModule } from "@angular/material/chips";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from "@angular/material/bottom-sheet";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDividerModule } from "@angular/material/divider";
import { DragDropModule } from "@angular/cdk/drag-drop";

// Pages
import { CoreModule } from "../../core/core.module";

// ! start:: The Compendium Pages
// * Test Page
import { TestPageComponent } from "./the-compendium-pages/test-page/test-page.component";

// * Dashboard Page
import { DashboardComponent } from "./the-compendium-pages/dashboard/dashboard.component";

// * Virtual Screen Page
import { VirtualScreenComponent } from "./the-compendium-pages/virtual-screen/virtual-screen.component";

// * Official 5E Resource Pages
import { WeaponsComponent } from "./the-compendium-pages/_resource-tables/official/weapons/weapons.component";
import { ArmorsComponent } from "./the-compendium-pages/_resource-tables/official/armor/armor.component";
import { ItemsComponent } from "./the-compendium-pages/_resource-tables/official/items/items.component";
import { NpcsComponent } from "./the-compendium-pages/_resource-tables/official/npcs/npcs.component";
import { SpellsComponent } from "./the-compendium-pages/_resource-tables/official/spells/spells.component";

// * Dialogs
// Details Dialogs
import { MatDialogModule } from "@angular/material/dialog";
import { ArmorDetailsDialogComponent } from "./the-compendium-pages/_resource-tables/resource-details-dialog/armor-details-dialog/armor-details-dialog.component";
import { NpcDetailsDialogComponent } from "./the-compendium-pages/_resource-tables/resource-details-dialog/npc-details-dialog/npc-details-dialog.component";
import { WeaponDetailsDialogComponent } from "./the-compendium-pages/_resource-tables/resource-details-dialog/weapon-details-dialog/weapon-details-dialog.component";
import { ItemDetailsDialogComponent } from "./the-compendium-pages/_resource-tables/resource-details-dialog/item-details-dialog/item-details-dialog.component";
import { SpellDetailsDialogComponent } from "./the-compendium-pages/_resource-tables/resource-details-dialog/spell-details-dialog/spell-details-dialog.component";
// Create Homebrew Dialogs
import { CreateWeaponDialogComponent } from "./the-compendium-pages/dm-tools/create/create-dialog/create-weapon-dialog/create-weapon-dialog.component";
import { CreateArmorDialogComponent } from "./the-compendium-pages/dm-tools/create/create-dialog/create-armor-dialog/create-armor-dialog.component";
import { CreateItemDialogComponent } from "./the-compendium-pages/dm-tools/create/create-dialog/create-item-dialog/create-item-dialog.component";
import { CreateNpcDialogComponent } from "./the-compendium-pages/dm-tools/create/create-dialog/create-npc-dialog/create-npc-dialog.component";
import { CreateSpellDialogComponent } from "./the-compendium-pages/dm-tools/create/create-dialog/create-spell-dialog/create-spell-dialog.component";
// Storyboard Dialogs
import { AddPlotDialogComponent } from "./the-compendium-pages/dm-tools/storyboard/storyboard-dialogs/add-plot-dialog/add-plot-dialog.component";
import { EditPlotDialogComponent } from "./the-compendium-pages/dm-tools/storyboard/storyboard-dialogs/edit-plot-dialog/edit-plot-dialog.component";
import { RemovePlotDialogComponent } from "./the-compendium-pages/dm-tools/storyboard/storyboard-dialogs/remove-plot-dialog/remove-plot-dialog.component";
// Session Summaries Dialogs
import { SessionSummariesDetailsDialogComponent } from "./the-compendium-pages/dm-tools/session-summaries/session-summaries-dialogs/details-dialog/session-summaries-details-dialog.component";
import { CreateSessionDialogComponent } from "./the-compendium-pages/dm-tools/create/create-dialog/create-session-dialog/create-session-dialog.component";
import { EditSessionDialogComponent } from "./the-compendium-pages/dm-tools/session-summaries/session-summaries-dialogs/edit-session-dialog/edit-session-dialog.component";
import { RemoveSessionDialogComponent } from "./the-compendium-pages/dm-tools/session-summaries/session-summaries-dialogs/remove-session-dialog/remove-session-dialog.component";

// * Homebrew Pages
import { HomebrewWeaponsComponent } from "./the-compendium-pages/_resource-tables/homebrew/homebrew-weapons/homebrew-weapons.component";
import { HomebrewArmorsComponent } from "./the-compendium-pages/_resource-tables/homebrew/homebrew-armor/homebrew-armor.component";
import { HomebrewItemsComponent } from "./the-compendium-pages/_resource-tables/homebrew/homebrew-items/homebrew-items.component";
import { HomebrewNpcsComponent } from "./the-compendium-pages/_resource-tables/homebrew/homebrew-npcs/homebrew-npcs.component";
import { HomebrewSpellsComponent } from "./the-compendium-pages/_resource-tables/homebrew/homebrew-spells/homebrew-spells.component";
// * DM Tools Pages
import { StoryboardComponent } from "./the-compendium-pages/dm-tools/storyboard/storyboard.component";
import { CreateComponent } from "./the-compendium-pages/dm-tools/create/create.component";
import { SessionSummariesComponent } from "./the-compendium-pages/dm-tools/session-summaries/session-summaries.component";
// * Components
import { ConfirmationDialogComponent } from "../components/_global-dialogs/confirmation-dialog/confirmation-dialog.component";
import { TcDatatableComponent } from "../components/tc-datatable/tc-datatable.component";
// ! end:: The Compendium Pages

import { RouterModule } from "@angular/router";
import { CardDialogComponent } from "./the-compendium-pages/virtual-screen/card-dialog/card-dialog.component";
import { CombatTrackerComponent } from "./the-compendium-pages/dm-tools/combat-tracker/combat-tracker.component";

@NgModule({
  declarations: [
    //The Compendium Pages
    // Global Components
    TcDatatableComponent,
    TestPageComponent,
    ConfirmationDialogComponent,

    // Dashboard and Virtual Screen
    DashboardComponent,
    VirtualScreenComponent,
    CardDialogComponent,

    // Resource Pages
    // Official
    WeaponsComponent,
    ArmorsComponent,
    ItemsComponent,
    NpcsComponent,
    SpellsComponent,
    StoryboardComponent,

    // Homebrew Pages
    HomebrewWeaponsComponent,
    HomebrewArmorsComponent,
    HomebrewItemsComponent,
    HomebrewNpcsComponent,
    HomebrewSpellsComponent,

    // DM Tools Pages
    CombatTrackerComponent,
    StoryboardComponent,
    CreateComponent,

    // Player Tools Pages

    // Dialogs
    ArmorDetailsDialogComponent,
    NpcDetailsDialogComponent,
    WeaponDetailsDialogComponent,
    ItemDetailsDialogComponent,
    SpellDetailsDialogComponent,
    CreateWeaponDialogComponent,
    CreateArmorDialogComponent,
    CreateItemDialogComponent,
    CreateSpellDialogComponent,
    CreateNpcDialogComponent,
    AddPlotDialogComponent,
    EditPlotDialogComponent,
    RemovePlotDialogComponent,
    CreateSessionDialogComponent,
    SessionSummariesComponent,
    SessionSummariesDetailsDialogComponent,
    EditSessionDialogComponent,
    RemoveSessionDialogComponent,
  ],
  exports: [],
  imports: [
    // material modules
    MatCheckboxModule,
    DragDropModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatListModule,
    MatSliderModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatTooltipModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatDividerModule,
    MatSortModule,
    MatStepperModule,
    MatChipsModule,
    MatPaginatorModule,
    MatIconModule,
    CoreModule,
    MatTreeModule,
    MatButtonToggleModule,
    PartialsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    PartialsModule,
    // Router
    RouterModule,
  ],
  providers: [],
})
export class PagesModule {}
