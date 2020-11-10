// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Partials
import { PartialsModule } from '../partials/partials.module';

// Data table
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTreeModule } from '@angular/material/tree';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBottomSheetModule, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';

// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';

// The Compendium Pages
import { WeaponComponent } from './the-compendium-pages/weapons/weapons.component';
import { ArmorComponent } from './the-compendium-pages/armor/armor.component';
import { ItemsComponent } from './the-compendium-pages/items/items.component';
import { NpcsComponent } from './the-compendium-pages/npcs/npcs.component';
import { SpellsComponent } from './the-compendium-pages/spells/spells.component';
import { CampaignsComponent } from './the-compendium-pages/campaigns/campaigns.component';
import { SessionsComponent } from './the-compendium-pages/sessions/sessions.component';
// Partials
import { ArmorDetailsDialogComponent } from "./the-compendium-pages/dialogs/details-dialog/armor-details/armor-details-dialog.component";
//Homebrew Pages
import { HomebrewWeaponsComponent } from './the-compendium-pages/homebrew/homebrew-weapons/homebrew-weapons.component';
import { HomebrewArmorComponent } from './the-compendium-pages/homebrew/homebrew-armor/homebrew-armor.component';
import { HomebrewItemsComponent } from './the-compendium-pages/homebrew/homebrew-items/homebrew-items.component';
import { HomebrewNpcsComponent } from './the-compendium-pages/homebrew/homebrew-npcs/homebrew-npcs.component';
import { HomebrewSpellsComponent } from './the-compendium-pages/homebrew/homebrew-spells/homebrew-spells.component';
// DM Tools Pages
import { ManageSessionsComponent } from './the-compendium-pages/dm-tools/manage-sessions/manage-sessions.component';
import { StoryboardComponent } from './the-compendium-pages/dm-tools/storyboard/storyboard.component';
import { CreateComponent } from './the-compendium-pages/dm-tools/create/create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NpcDetailsDialogComponent } from './the-compendium-pages/dialogs/details-dialog/npc-details/npc-details-dialog.component';

@NgModule({
  declarations: [
	  //The Compendium Pages
	  WeaponComponent, 
	  ArmorComponent,
	  ItemsComponent, 
	  NpcsComponent, 
	  SpellsComponent,
	  StoryboardComponent, 
	  CampaignsComponent, 
	  SessionsComponent,
	  // Homebrew Pages
	  HomebrewWeaponsComponent, 
	  HomebrewArmorComponent, 
	  HomebrewItemsComponent, 
	  HomebrewNpcsComponent, 
	  HomebrewSpellsComponent,
	  // DM Tools Pages
	  StoryboardComponent,
	  ManageSessionsComponent,
	  CreateComponent,
	  // Dialogs
	  ArmorDetailsDialogComponent,
	  NpcDetailsDialogComponent,
	],
  exports: [],
  imports: [
	// material modules
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
  ],
  providers: []
})
export class PagesModule {
}
