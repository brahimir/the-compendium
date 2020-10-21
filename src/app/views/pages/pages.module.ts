// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { MyPageComponent } from './my-page/my-page.component';
import { WeaponsComponent } from './the-compendium-pages/weapons/weapons.component';
import { ItemsComponent } from './the-compendium-pages/items/items.component';
import { MonstersAndNpcsComponent } from './the-compendium-pages/monsters-and-npcs/monsters-and-npcs.component';
import { SpellsComponent } from './the-compendium-pages/spells/spells.component';
import { HomebrewComponent } from './the-compendium-pages/homebrew/homebrew.component';

@NgModule({
  declarations: [MyPageComponent, WeaponsComponent, ItemsComponent, MonstersAndNpcsComponent, SpellsComponent, HomebrewComponent],
  exports: [],
  imports: [
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
