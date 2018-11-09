import { Component, OnInit } from '@angular/core';
import { IgdbService } from '../services/igdb.service';
import { IGame } from 'src/models/game-model';
import {FormControl} from '@angular/forms';
import { MatDialog, MatGridTileHeaderCssMatStyler } from '@angular/material';
import { GameInfoComponent } from '../modals/game-info/game-info.component';
import { WriteReviewComponent } from '../modals/write-review/write-review.component';

@Component({
  selector: 'app-browse-games',
  templateUrl: './browse-games.component.html',
  styleUrls: ['./browse-games.component.scss']
})
export class BrowseGamesComponent implements OnInit {

  games: IGame[];
  ageRatingFormat: number;
  searchTerm: FormControl = new FormControl;

  constructor(public gameService: IgdbService, public dialog: MatDialog) { }

  ngOnInit() {
    this.ageRatingFormat = 0;
    this.games = this.gameService.getGames()
  }

  changeAgeRating(): void {
    if(this.ageRatingFormat == 0)
    { this.ageRatingFormat = 1; }
    else
    { this.ageRatingFormat = 0}
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
