import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowseGamesComponent } from './browse-games/browse-games.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameRowComponent } from './game-row/game-row.component';
import { WriteReviewComponent } from './modals/write-review/write-review.component';
import { GameInfoComponent } from './modals/game-info/game-info.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewRowComponent } from './review-row/review-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BrowseGamesComponent,
    LoginRegisterComponent,
    GamesListComponent,
    GameRowComponent,
    WriteReviewComponent,
    GameInfoComponent,
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
