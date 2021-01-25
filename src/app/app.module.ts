import { CommonModule } from "@angular/common";
// Angular
import { BrowserModule, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { GestureConfig } from "@angular/material/core";
import { OverlayModule } from "@angular/cdk/overlay";
// Angular in memory
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
// Perfect Scroll bar
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
// SVG inline
import { InlineSVGModule } from "ng-inline-svg";
// Env
import { environment } from "../environments/environment";
// Hammer JS
import "hammerjs";
// NGX Permissions
import { NgxPermissionsModule } from "ngx-permissions";
// NGRX
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
// State
import { metaReducers, reducers } from "./core/reducers";
// Components
import { AppComponent } from "./app.component";
// Modules
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { ThemeModule } from "./views/theme/theme.module";
// Partials
import { PartialsModule } from "./views/partials/partials.module";
// Layout Services
import {
  DataTableService,
  FakeApiService,
  KtDialogService,
  LayoutConfigService,
  LayoutRefService,
  MenuAsideService,
  MenuConfigService,
  MenuHorizontalService,
  PageConfigService,
  SplashScreenService,
  SubheaderService,
} from "./core/_base/layout";
// Auth
import { AuthModule } from "./views/pages/auth/auth.module";
import { AuthService } from "./core/auth";
// CRUD
import { HttpUtilsService, LayoutUtilsService, TypesUtilsService } from "./core/_base/crud";
// Config
import { LayoutConfig } from "./core/_config/layout.config";
// Highlight JS
import { HighlightModule, HIGHLIGHT_OPTIONS } from "ngx-highlightjs";
import xml from "highlight.js/lib/languages/xml";
import json from "highlight.js/lib/languages/json";
import scss from "highlight.js/lib/languages/scss";
import typescript from "highlight.js/lib/languages/typescript";
// MatDialog
import { MatDialogConfig, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";

// ! The Compendium
// Details Dialogs
// Homebrew
import { ArmorDetailsDialogComponent } from "./views/pages/the-compendium-pages/_resource-tables/resource-details-dialog/armor-details-dialog/armor-details-dialog.component";
import { NpcDetailsDialogComponent } from "./views/pages/the-compendium-pages/_resource-tables/resource-details-dialog/npc-details-dialog/npc-details-dialog.component";
import { WeaponDetailsDialogComponent } from "./views/pages/the-compendium-pages/_resource-tables/resource-details-dialog/weapon-details-dialog/weapon-details-dialog.component";
import { ItemDetailsDialogComponent } from "./views/pages/the-compendium-pages/_resource-tables/resource-details-dialog/item-details-dialog/item-details-dialog.component";
import { SpellDetailsDialogComponent } from "./views/pages/the-compendium-pages/_resource-tables/resource-details-dialog/spell-details-dialog/spell-details-dialog.component";
// Session Summaries
import { SessionSummariesDetailsDialogComponent } from "./views/pages/the-compendium-pages/dm-tools/session-summaries/session-summaries-dialogs/details-dialog/session-summaries-details-dialog.component";

// CRUD Dialogs
// Homebrew
import { CreateWeaponDialogComponent } from "./views/pages/the-compendium-pages/dm-tools/create/create-dialog/create-weapon-dialog/create-weapon-dialog.component";
import { CreateArmorDialogComponent } from "./views/pages/the-compendium-pages/dm-tools/create/create-dialog/create-armor-dialog/create-armor-dialog.component";
import { CreateItemDialogComponent } from "./views/pages/the-compendium-pages/dm-tools/create/create-dialog/create-item-dialog/create-item-dialog.component";
import { CreateNpcDialogComponent } from "./views/pages/the-compendium-pages/dm-tools/create/create-dialog/create-npc-dialog/create-npc-dialog.component";
import { CreateSpellDialogComponent } from "./views/pages/the-compendium-pages/dm-tools/create/create-dialog/create-spell-dialog/create-spell-dialog.component";
// Storyboard Plots
import { AddPlotDialogComponent } from "./views/pages/the-compendium-pages/dm-tools/storyboard/storyboard-dialogs/add-plot-dialog/add-plot-dialog.component";
import { EditPlotDialogComponent } from "./views/pages/the-compendium-pages/dm-tools/storyboard/storyboard-dialogs/edit-plot-dialog/edit-plot-dialog.component";
import { RemovePlotDialogComponent } from "./views/pages/the-compendium-pages/dm-tools/storyboard/storyboard-dialogs/remove-plot-dialog/remove-plot-dialog.component";
// Session Summaries
import { CreateSessionDialogComponent } from "./views/pages/the-compendium-pages/dm-tools/create/create-dialog/create-session-dialog/create-session-dialog.component";
import { EditSessionDialogComponent } from "./views/pages/the-compendium-pages/dm-tools/session-summaries/session-summaries-dialogs/edit-session-dialog/edit-session-dialog.component";
import { RemoveSessionDialogComponent } from "./views/pages/the-compendium-pages/dm-tools/session-summaries/session-summaries-dialogs/remove-session-dialog/remove-session-dialog.component";
import { ActionNotificationComponent } from "./views/partials/content/crud";
import { ConfirmationDialogComponent } from "./views/pages/the-compendium-pages/_global-dialogs/confirmation-dialog/confirmation-dialog.component";

// MatDialog Defaults
const MAT_DIALOG_DEFAULTS: MatDialogConfig = {
  minWidth: "60%",
  maxWidth: "80%",
  hasBackdrop: true,
};

// tslint:disable-next-line:class-name
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelSpeed: 0.5,
  swipeEasing: true,
  minScrollbarLength: 40,
  maxScrollbarLength: 300,
};

export function initializeLayoutConfig(appConfig: LayoutConfigService) {
  // initialize app by loading default demo layout config
  return () => {
    if (appConfig.getConfig() === null) {
      appConfig.loadConfigs(new LayoutConfig().configs);
    }
  };
}

/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
export function getHighlightLanguages() {
  return [
    { name: "typescript", func: typescript },
    { name: "scss", func: scss },
    { name: "xml", func: xml },
    { name: "json", func: json },
  ];
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeApiService, {
          passThruUnknownUrl: true,
          dataEncapsulation: false,
        })
      : [],
    NgxPermissionsModule.forRoot(),
    HighlightModule,
    PartialsModule,
    CoreModule,
    OverlayModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    StoreDevtoolsModule.instrument(),
    AuthModule.forRoot(),
    TranslateModule.forRoot(),
    MatProgressSpinnerModule,
    InlineSVGModule.forRoot(),
    ThemeModule,
  ],
  // ! Add DialogComponents here
  entryComponents: [
    // * Global Dialogs
    // Confirmation Dialog
    ConfirmationDialogComponent,
    // * Details Dialogs
    // Resource Details Dialogs
    WeaponDetailsDialogComponent,
    ArmorDetailsDialogComponent,
    ItemDetailsDialogComponent,
    NpcDetailsDialogComponent,
    SpellDetailsDialogComponent,
    // Sessions Details Dialogs
    SessionSummariesDetailsDialogComponent,
    EditSessionDialogComponent,
    RemoveSessionDialogComponent,
    // * Storyboard Dialogs
    // Plot Dialogs
    AddPlotDialogComponent,
    RemovePlotDialogComponent,
    EditPlotDialogComponent,
    // * Create Dialogs
    // Homebrew Dialogs
    CreateWeaponDialogComponent,
    CreateArmorDialogComponent,
    CreateItemDialogComponent,
    CreateNpcDialogComponent,
    CreateSpellDialogComponent,
    // Adventure Dialogs
    CreateSessionDialogComponent,

    // ! Add Partials Modules here - need to fix this in the future.
    ActionNotificationComponent,
  ],
  exports: [],
  providers: [
    AuthService,
    LayoutConfigService,
    LayoutRefService,
    MenuConfigService,
    PageConfigService,
    KtDialogService,
    DataTableService,
    SplashScreenService,
    // ! MatDialog Sizing
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: MAT_DIALOG_DEFAULTS,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: GestureConfig,
    },
    {
      // layout config initializer
      provide: APP_INITIALIZER,
      useFactory: initializeLayoutConfig,
      deps: [LayoutConfigService],
      multi: true,
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages,
      },
    },
    // template services
    SubheaderService,
    MenuHorizontalService,
    MenuAsideService,
    HttpUtilsService,
    TypesUtilsService,
    LayoutUtilsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
