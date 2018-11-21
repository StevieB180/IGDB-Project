import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IGame } from 'src/models/game-model';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent{

  constructor(
    public dialogRef: MatDialogRef<WriteReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IGame) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getGameCover(g : IGame): string {
    return ('http:' + g.cover.url);
  }
}
