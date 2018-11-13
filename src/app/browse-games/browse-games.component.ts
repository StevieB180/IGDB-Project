import { Component, OnInit } from '@angular/core';
import { IgdbService } from '../services/igdb.service';
import { IGame } from 'src/models/game-model';
import {FormControl} from '@angular/forms';
import { MatDialog, MatGridTileHeaderCssMatStyler } from '@angular/material';
import { GameInfoComponent } from '../modals/game-info/game-info.component';
import { WriteReviewComponent } from '../modals/write-review/write-review.component';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators"

@Component({
  selector: 'app-browse-games',
  templateUrl: './browse-games.component.html',
  styleUrls: ['./browse-games.component.scss']
})
export class BrowseGamesComponent implements OnInit {

  gamesMaster: IGame[];
  games: IGame[];
  ageRatingFormat: number;
  searchTerm: FormControl = new FormControl;

  constructor(public _gameService: IgdbService, public dialog: MatDialog) {
    this.searchTerm.valueChanges
    .pipe(debounceTime(1000))
    .pipe(distinctUntilChanged())
    .subscribe(searchTerm =>
      this.games = this.searchGame(searchTerm)
    )
  }

  ngOnInit() {
    this.ageRatingFormat = 0;

    this._gameService.getGames().subscribe(data =>
      this.gamesMaster = data);
    
      this._gameService.getGames().subscribe(data =>
        this.games = data);
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
  closeGameInfoModal(game: IGame): void {
    const dialogRef = this.dialog.closeAll()
  }

  openGameReviewModal(game: IGame): void{
    const dialogRef = this.dialog.open(WriteReviewComponent, {
      data: game
    })
  }

  searchGame(filterBy: string): IGame[] {
    if (filterBy.length > 0) {
      filterBy = filterBy.toLocaleLowerCase();
      return this.gamesMaster.filter((g: IGame) => 
        g.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    else {
      return this.gamesMaster;
    }
  }
}
