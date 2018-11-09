import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseGamesComponent } from './browse-games/browse-games.component';
import { GameRowComponent } from './game-row/game-row.component';
import { GameListComponent } from './game-list/game-list.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { GameInfoComponent } from './modals/game-info/game-info.component';
import { WriteReviewComponent } from './modals/write-review/write-review.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewRowComponent } from './review-row/review-row.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseGamesComponent,
    GameRowComponent,
    GameListComponent,
    LoginComponent,
    RegisterComponent,
    GameInfoComponent,
    WriteReviewComponent,
    NavigationComponent,
    ReviewListComponent,
    ReviewRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
