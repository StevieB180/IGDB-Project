import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IGame } from 'src/models/game-model';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent {

  constructor(
    public dialogRef: MatDialogRef<GameInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IGame) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
