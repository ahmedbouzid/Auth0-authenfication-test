import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { SingInComponent } from './sing-in/sing-in.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'signIn', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'main' , component :MainComponent , canActivate : [AuthGuard]},

  { path: 'signIn', component: SingInComponent },
  { path: '**', redirectTo: 'signIn' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
