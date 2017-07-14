import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AccountComponent } from './account/account.component';

const homeRoutes: Routes = [
    { path: 'account', component: HomeComponent, children: [
      { path: '', component: AccountComponent }
    ]} 
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }