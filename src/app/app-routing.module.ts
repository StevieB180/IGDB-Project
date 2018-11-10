import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseGamesComponent } from './browse-games/browse-games.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { AuthGuard } from '../app/services/auth.guard';


const routes: Routes = [
  { path: 'browse', component: BrowseGamesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'browse', pathMatch: 'full' },
  { path: '**', redirectTo: 'browse', pathMatch: 'full' }
]

//Will imploment auth when application near finshed 
// const routes: Routes = [
//   {path: '', redirectTo:'register', pathMatch: 'full', canActivate: [AuthGuard]},
//   {path: 'browse', component: BrowseGamesComponent, canActivate: [AuthGuard]},
//   {path: 'home', component: BrowseGamesComponent, canActivate: [AuthGuard]},
//   {path: 'login', component: LoginComponent},
//   {path: 'register', component: RegisterComponent},
//   {path: '**', redirectTo:'login', canActivate: [AuthGuard]}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
