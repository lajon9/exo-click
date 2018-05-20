import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routes';

import { MatToolbarModule } from '@angular/material/toolbar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HomeComponent } from './home.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [HomeComponent, AccountComponent],
  imports: [CommonModule, HomeRoutingModule, MatToolbarModule, BrowserAnimationsModule],
  exports: [HomeComponent]
})
export class HomeModule {}
