import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IGame } from 'src/models/game-model';
import { BrowseGamesComponent } from '../../browse-games/browse-games.component';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {

  gameObject: IGame;
  imageString: string;
  constructor(
    public dialogRef: MatDialogRef<GameInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IGame) {
    console.log("GIC: data.cover.url = "+data.cover.url)
    this.gameObject = data
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.imageString = 'http:'+ this.gameObject.cover.url
  }
}
