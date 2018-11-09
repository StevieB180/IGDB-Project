import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular material stuff
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseGamesComponent } from './browse-games/browse-games.component';
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
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    GameInfoComponent,
    WriteReviewComponent
  ]
})
export class AppModule { }
