import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseGamesComponent } from './browse-games/browse-games.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { AuthGuard } from '../app/services/auth.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'browse', component: BrowseGamesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
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
