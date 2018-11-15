import { Component, OnInit } from '@angular/core';
import { IgdbService } from '../services/igdb.service';
import { IGame, EESRB, EPEGI } from 'src/models/game-model';
import {FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { GameInfoComponent } from '../modals/game-info/game-info.component';
import { WriteReviewComponent } from '../modals/write-review/write-review.component';
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators"

@Component({
  selector: 'app-browse-games',
  templateUrl: './browse-games.component.html',
  styleUrls: ['./browse-games.component.scss']
})
export class BrowseGamesComponent implements OnInit {
  games: IGame[] = [];
  ageRatingFormat: number = 0;
  searchTerm: FormControl = new FormControl;
  tableEnabled: boolean = false;

  constructor(public _gameService: IgdbService, public dialog: MatDialog) {
    this.searchTerm.valueChanges
    .pipe(debounceTime(1000))
    .pipe(distinctUntilChanged())
    .subscribe(searchTerm => this.searchGame(searchTerm))
  }

  async ngOnInit() {
    await this._gameService.getGamesFull().subscribe(x => {
      this.games = x
      })

    this.tableEnabled = true;
  }

  //Adds a list of games with all data to games master
  testButton() {
    console.log(this.games);
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

  async searchGame(filterBy: string) {
    this.tableEnabled = false;
    this.games.length = 0;

    if(filterBy.length > 0) {
      await this._gameService.searchGames(filterBy).subscribe(x => this.games = x);
    }
    else {
      await this._gameService.getGamesFull().subscribe(x => this.games);
    }
    this.tableEnabled = true;
  }
}
