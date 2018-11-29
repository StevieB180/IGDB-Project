import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IGame, ICompany } from 'src/models/game-model';
import { BrowseGamesComponent } from '../../browse-games/browse-games.component';
import { IgdbService } from 'src/app/services/igdb.service';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';
import { IReview, IReviewGame } from 'src/models/user-review.model';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {
  imageString: string;
  devName: string;
  devGen: string;
  devPlat: string;
  reviews: IReview[];

  constructor(
    public _reviewService: FirestoreService,
    public dialogRef: MatDialogRef<GameInfoComponent>,
    private _gameService: IgdbService, 
    @Inject(MAT_DIALOG_DATA) public data: IGame) { }
     
  getDev(devID:number){
    this._gameService.getDev(devID).subscribe(x => {
    this.devName = x[0].name;
    console.log(x)
    });
  } 
 

  getPlat(devID:number){
    this._gameService.getPlat(devID).subscribe(x => {
    this.devPlat = x[0].name;
    console.log(x)
    });
  } 

  getGen(devID:number){
    this._gameService.getGen(devID).subscribe(x => {
    this.devGen = x[0].name;
    console.log(x)
    });
  } 

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.imageString = 'http:'+ this.data.cover.url;
    
    // if(this.data.developers != null)
    // { this.getDev(this.data.developers[0]); }

    // if(this.data.genres != null)
    // { this.getGen(this.data.genres[0]); } 

    // if(this.data.platforms != null)
    // { this.getPlat(this.data.platforms[0]); } 

    this.reviews = [];
    console.log("Getting reviews for game ID " + this.data.id);
    this._reviewService.getGameReviews(this.data.id).subscribe(x => {
      this.reviews = (x[0])?(x[0].reviews):([]);
      console.log(x);
    });
  }
}
