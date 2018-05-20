import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard';
import { HomeComponent } from './home.component';
import { AccountComponent } from './account/account.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'account' },
  { path: 'account', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: '', component: AccountComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
