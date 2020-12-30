// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
// Components
import { BaseComponent } from "./views/theme/base/base.component";
// Auth
import { AuthGuard } from "./core/auth";

// The Compendium Components
import { DashboardComponent } from "./views/pages/the-compendium-pages/dashboard/dashboard.component";
import { AdventuresComponent } from "./views/pages/the-compendium-pages/adventures/adventures.component";
// Official 5E Resource Pages
import { WeaponComponent } from "./views/pages/the-compendium-pages/_resource-tables/official/weapons/weapons.component";
import { ArmorComponent } from "./views/pages/the-compendium-pages/_resource-tables/official/armor/armor.component";
import { ItemsComponent } from "./views/pages/the-compendium-pages/_resource-tables/official/items/items.component";
import { NpcsComponent } from "./views/pages/the-compendium-pages/_resource-tables/official/npcs/npcs.component";
import { SpellsComponent } from "./views/pages/the-compendium-pages/_resource-tables/official/spells/spells.component";
//Homebrew Resource Pages
import { HomebrewWeaponsComponent } from "./views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-weapons/homebrew-weapons.component";
import { HomebrewArmorComponent } from "./views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-armor/homebrew-armor.component";
import { HomebrewItemsComponent } from "./views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-items/homebrew-items.component";
import { HomebrewNpcsComponent } from "./views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-npcs/homebrew-npcs.component";
import { HomebrewSpellsComponent } from "./views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-spells/homebrew-spells.component";
// DM Tools
import { StoryboardComponent } from "./views/pages/the-compendium-pages/_dm-tools/storyboard/storyboard.component";
import { CreateComponent } from "./views/pages/the-compendium-pages/_dm-tools/create/create.component";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./views/pages/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "error",
    loadChildren: () =>
      import("./views/pages/error/error.module").then((m) => m.ErrorModule),
  },
  {
    path: "",
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      // start:: The Compendium Pages
      {
        path: "dashboard",
        component: DashboardComponent,
      },

      {
        path: "weapons",
        component: WeaponComponent,
      },
      {
        path: "armor",
        component: ArmorComponent,
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
      {
        path: "adventures",
        component: AdventuresComponent,
      },
      // Homebrew Pages
      {
        path: "homebrew-weapons",
        component: HomebrewWeaponsComponent,
      },
      {
        path: "homebrew-armor",
        component: HomebrewArmorComponent,
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
        path: "create",
        component: CreateComponent,
      },
      // end:: The Compendium Pages

      {
        path: "mail",
        loadChildren: () =>
          import("./views/pages/apps/mail/mail.module").then(
            (m) => m.MailModule
          ),
      },
      {
        path: "ecommerce",
        loadChildren: () =>
          import("./views/pages/apps/e-commerce/e-commerce.module").then(
            (m) => m.ECommerceModule
          ),
      },
      {
        path: "ngbootstrap",
        loadChildren: () =>
          import("./views/pages/ngbootstrap/ngbootstrap.module").then(
            (m) => m.NgbootstrapModule
          ),
      },
      {
        path: "material",
        loadChildren: () =>
          import("./views/pages/material/material.module").then(
            (m) => m.MaterialModule
          ),
      },
      {
        path: "user-management",
        loadChildren: () =>
          import("./views/pages/user-management/user-management.module").then(
            (m) => m.UserManagementModule
          ),
      },
      {
        path: "wizard",
        loadChildren: () =>
          import("./views/pages/wizard/wizard.module").then(
            (m) => m.WizardModule
          ),
      },
      {
        path: "builder",
        loadChildren: () =>
          import("./views/theme/content/builder/builder.module").then(
            (m) => m.BuilderModule
          ),
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
