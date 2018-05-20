import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routes';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HomeComponent } from './home.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [HomeComponent, AccountComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, BrowserAnimationsModule],
  exports: [HomeComponent]
})
export class HomeModule {}
