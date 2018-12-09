import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular material stuff
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatIconModule } from '@angular/material';

//Angular material stuff
import { FontAwesomeModule } from'@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
library.add(faGoogle);
library.add(faFacebook);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseGamesComponent } from './browse-games/browse-games.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { GameInfoComponent } from './modals/game-info/game-info.component';
import { WriteReviewComponent } from './modals/write-review/write-review.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { NotificationsComponent } from './notifications/notifications.component'

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { environment } from '../environments/environment';
import { AuthGuard } from '../app/services/auth.guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule,} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';
import { HomeComponent } from './home/home.component';
import { IgdbService } from './services/igdb.service';
import { HttpClientModule } from '@angular/common/http';
import { GamesTableComponent } from './games-table/games-table.component';
import { FirestoreService } from './services/firestore.service';
import {SlideshowModule} from 'ng-simple-slideshow';


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
    NotificationsComponent,
    HomeComponent,
    GamesTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,  
    AngularFireModule.initializeApp(environment.firebase,),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTableModule,
    FontAwesomeModule,
    SlideshowModule,
    MatIconModule
  ],

  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, IgdbService, FirestoreService],
  bootstrap: [AppComponent],
  entryComponents: [
    GameInfoComponent,
    WriteReviewComponent
  ]
})
export class AppModule { }
