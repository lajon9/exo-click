import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routes';
import { HomeComponent } from './home.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [HomeComponent, AccountComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent]
})
export class HomeModule {}