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
  MatProgressSpinnerModule } from '@angular/material';

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
    ReviewRowComponent,
    NotificationsComponent,
    HomeComponent,
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
    HttpClientModule
  ],

  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, IgdbService],
  bootstrap: [AppComponent],
  entryComponents: [
    GameInfoComponent,
    WriteReviewComponent
  ]
})
export class AppModule { }
