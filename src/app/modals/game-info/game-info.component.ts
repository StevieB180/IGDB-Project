import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IGame, ICompany } from 'src/models/game-model';
import { BrowseGamesComponent } from '../../browse-games/browse-games.component';
import { IgdbService } from 'src/app/services/igdb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {
  imageString: string;
  devName: string;

  constructor(public dialogRef: MatDialogRef<GameInfoComponent>,private _gameService: IgdbService, @Inject(MAT_DIALOG_DATA) public data: IGame) { }
     
  getDev(devID:number){
    this._gameService.getDev(devID).subscribe(x => {
    this.devName = x[0].name;
    console.log(x)
    });
  } 
   
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.imageString = 'http:'+ this.data.cover.url;
    
    if(this.data.developers != null)
    { this.getDev(this.data.developers[0]); }
  }

  
  onBack(): void {
  
   this.dialogRef.close();
  }
  
}
