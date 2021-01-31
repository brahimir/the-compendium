// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
// Components
import { BaseComponent } from "./views/theme/base/base.component";
// Auth
import { AuthGuard } from "./core/auth";

// ! The Compendium Components
// Dashboard and Virtual Screen Pages
import { DashboardComponent } from "./views/pages/the-compendium-pages/dashboard/dashboard.component";
import { VirtualScreenComponent } from "./views/pages/the-compendium-pages/virtual-screen/virtual-screen.component";

// Official 5E Resource Pages
import { WeaponsComponent } from "./views/pages/the-compendium-pages/_resource-tables/official/weapons/weapons.component";
import { ArmorsComponent } from "./views/pages/the-compendium-pages/_resource-tables/official/armor/armor.component";
import { ItemsComponent } from "./views/pages/the-compendium-pages/_resource-tables/official/items/items.component";
import { NpcsComponent } from "./views/pages/the-compendium-pages/_resource-tables/official/npcs/npcs.component";
import { SpellsComponent } from "./views/pages/the-compendium-pages/_resource-tables/official/spells/spells.component";

//Homebrew Resource Pages
import { HomebrewWeaponsComponent } from "./views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-weapons/homebrew-weapons.component";
import { HomebrewArmorsComponent } from "./views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-armor/homebrew-armor.component";
import { HomebrewItemsComponent } from "./views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-items/homebrew-items.component";
import { HomebrewNpcsComponent } from "./views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-npcs/homebrew-npcs.component";
import { HomebrewSpellsComponent } from "./views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-spells/homebrew-spells.component";

// DM Tools
import { CombatTrackerComponent } from "./views/pages/the-compendium-pages/dm-tools/combat-tracker/combat-tracker.component";
import { StoryboardComponent } from "./views/pages/the-compendium-pages/dm-tools/storyboard/storyboard.component";
import { SessionSummariesComponent } from "./views/pages/the-compendium-pages/dm-tools/session-summaries/session-summaries.component";
import { CreateComponent } from "./views/pages/the-compendium-pages/dm-tools/create/create.component";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./views/pages/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "error",
    loadChildren: () => import("./views/pages/error/error.module").then((m) => m.ErrorModule),
  },
  {
    path: "",
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      // ! start:: The Compendium Pages
      // Dashboard and Virtual Screen
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "virtual-screen",
        component: VirtualScreenComponent,
      },
      // 5e Resources
      {
        path: "weapons",
        component: WeaponsComponent,
      },
      {
        path: "armor",
        component: ArmorsComponent,
      },
      {
        path: "items",
        component: ItemsComponent,
      },
      {
        path: "npcs",
        component: NpcsComponent,
      },
      {
        path: "spells",
        component: SpellsComponent,
      },
      // Homebrew Pages
      {
        path: "homebrew-weapons",
        component: HomebrewWeaponsComponent,
      },
      {
        path: "homebrew-armor",
        component: HomebrewArmorsComponent,
      },
      {
        path: "homebrew-items",
        component: HomebrewItemsComponent,
      },
      {
        path: "homebrew-npcs",
        component: HomebrewNpcsComponent,
      },
      {
        path: "homebrew-spells",
        component: HomebrewSpellsComponent,
      },
      // DM Tools Pages
      {
        path: "storyboard",
        component: StoryboardComponent,
      },
      {
        path: "session-summaries",
        component: SessionSummariesComponent,
      },
      {
        path: "create",
        component: CreateComponent,
      },
      {
        path: "combat-tracker",
        component: CombatTrackerComponent,
      },
      // ! end:: The Compendium Pages

      {
        path: "wizard",
        loadChildren: () => import("./views/pages/wizard/wizard.module").then((m) => m.WizardModule),
      },
      {
        path: "builder",
        loadChildren: () =>
          import("./views/theme/content/builder/builder.module").then((m) => m.BuilderModule),
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "**", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  { path: "**", redirectTo: "error/403", pathMatch: "full" },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
