import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './home/account/account.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent}
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}