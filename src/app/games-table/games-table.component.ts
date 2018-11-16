import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/models/game-model';
import { MatDialog } from '@angular/material';
import { GameInfoComponent } from '../modals/game-info/game-info.component';
import { WriteReviewComponent } from '../modals/write-review/write-review.component';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.scss']
})
export class GamesTableComponent implements OnInit {
  @Input('GamesInput') games: IGame[];
  displayedColumns: string[] = ['title','developer','publisher','releaseDate','ageRating','actionButtons'];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  getGameCover(g : IGame): string {
    return ('http:' + g.cover.url);
  }

  openGameInfoModal(game: IGame): void {
    const dialogRef = this.dialog.open(GameInfoComponent, {
      data: game
    })
  }

  openGameReviewModal(game: IGame): void{
    const dialogRef = this.dialog.open(WriteReviewComponent, {
      data: game
    })
  }
}
