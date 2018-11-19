import { Component, OnInit, Input } from '@angular/core';
import { IGame, ICompany } from 'src/models/game-model';
import { MatDialog } from '@angular/material';
import { GameInfoComponent } from '../modals/game-info/game-info.component';
import { WriteReviewComponent } from '../modals/write-review/write-review.component';
import { IgdbService } from '../services/igdb.service';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.scss']
})
export class GamesTableComponent implements OnInit {
  @Input('GamesInput') games: IGame[];
  displayedColumns: string[] = ['title','developer','publisher','releaseDate','ageRating','actionButtons'];

  constructor(public dialog: MatDialog, public _gameService: IgdbService) { }

  ngOnInit() {
  }

  openGameInfoModal(game: IGame): void {
    const dialogRef = this.dialog.open(GameInfoComponent, {
      data: game
    })
  }

  openGameReviewModal(game: IGame): void{
    const dialogRef = this.dialog.open(WriteReviewComponent, {
      // width: '600px',
      data: game
    })
  }

  getGameCover(g : IGame): string {
    return ('http:' + g.cover.url);
  }

  //openGameInfo(g: IGame) {
    //window.open(g.url);
  //}

  openGameInfo(game: IGame): void {
    const dialogRef = this.dialog.open(GameInfoComponent, {
      data: game
    })
  }
  
  // getGameDev(companyID: number): string {
  //   return this._gameService.getGameCompanyName(companyID);
  // }
}
