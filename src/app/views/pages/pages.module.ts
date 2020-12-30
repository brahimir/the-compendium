// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// Partials
import { PartialsModule } from "../partials/partials.module";

// Data table
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
import { MailModule } from "./apps/mail/mail.module";
import { ECommerceModule } from "./apps/e-commerce/e-commerce.module";
import { UserManagementModule } from "./user-management/user-management.module";

// ! start:: The Compendium Pages
// Official 5E Resource Pages
import { WeaponComponent } from "./the-compendium-pages/_resource-tables/official/weapons/weapons.component";
import { ArmorComponent } from "./the-compendium-pages/_resource-tables/official/armor/armor.component";
import { ItemsComponent } from "./the-compendium-pages/_resource-tables/official/items/items.component";
import { NpcsComponent } from "./the-compendium-pages/_resource-tables/official/npcs/npcs.component";
import { SpellsComponent } from "./the-compendium-pages/_resource-tables/official/spells/spells.component";
// Dialogs
import { MatDialogModule } from "@angular/material/dialog";
import { ArmorDetailsDialogComponent } from "./the-compendium-pages/_dialogs/details-dialog/armor-details-dialog/armor-details-dialog.component";
import { NpcDetailsDialogComponent } from "./the-compendium-pages/_dialogs/details-dialog/npc-details-dialog/npc-details-dialog.component";
import { WeaponDetailsDialogComponent } from "./the-compendium-pages/_dialogs/details-dialog/weapon-details-dialog/weapon-details-dialog.component";
import { ItemDetailsDialogComponent } from "./the-compendium-pages/_dialogs/details-dialog/item-details-dialog/item-details-dialog.component";
import { SpellDetailsDialogComponent } from "./the-compendium-pages/_dialogs/details-dialog/spell-details-dialog/spell-details-dialog.component";
// Homebrew Pages
import { HomebrewWeaponsComponent } from "./the-compendium-pages/_resource-tables/homebrew/homebrew-weapons/homebrew-weapons.component";
import { HomebrewArmorComponent } from "./the-compendium-pages/_resource-tables/homebrew/homebrew-armor/homebrew-armor.component";
import { HomebrewItemsComponent } from "./the-compendium-pages/_resource-tables/homebrew/homebrew-items/homebrew-items.component";
import { HomebrewNpcsComponent } from "./the-compendium-pages/_resource-tables/homebrew/homebrew-npcs/homebrew-npcs.component";
import { HomebrewSpellsComponent } from "./the-compendium-pages/_resource-tables/homebrew/homebrew-spells/homebrew-spells.component";
// DM Tools Pages
import { AdventuresComponent } from "./the-compendium-pages/adventures/adventures.component";
import { StoryboardComponent } from "./the-compendium-pages/_dm-tools/storyboard/storyboard.component";
import { CreateComponent } from "./the-compendium-pages/_dm-tools/create/create.component";
import { DashboardComponent } from "./the-compendium-pages/dashboard/dashboard.component";
// ! end:: The Compendium Pages

import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    //The Compendium Pages
    WeaponComponent,
    ArmorComponent,
    ItemsComponent,
    NpcsComponent,
    SpellsComponent,
    StoryboardComponent,
    AdventuresComponent,
    // Homebrew Pages
    HomebrewWeaponsComponent,
    HomebrewArmorComponent,
    HomebrewItemsComponent,
    HomebrewNpcsComponent,
    HomebrewSpellsComponent,
    // DM Tools Pages
    StoryboardComponent,
    CreateComponent,
    // Dialogs
    ArmorDetailsDialogComponent,
    NpcDetailsDialogComponent,
    WeaponDetailsDialogComponent,
    ItemDetailsDialogComponent,
    SpellDetailsDialogComponent,
    DashboardComponent,
  ],
  exports: [],
  imports: [
    // material modules
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
    CoreModule,
    MatTreeModule,
    MatButtonToggleModule,
    PartialsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    PartialsModule,
    MailModule,
    ECommerceModule,
    UserManagementModule,
    // Router
    RouterModule,
  ],
  providers: [],
})
export class PagesModule {}
