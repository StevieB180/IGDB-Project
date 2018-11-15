import { Component, OnInit } from '@angular/core';
import { IgdbService } from '../services/igdb.service';
import { IGame, EESRB, EPEGI } from 'src/models/game-model';
import {FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { GameInfoComponent } from '../modals/game-info/game-info.component';
import { WriteReviewComponent } from '../modals/write-review/write-review.component';
import { debounceTime, distinctUntilChanged } from "rxjs/operators"

@Component({
  selector: 'app-browse-games',
  templateUrl: './browse-games.component.html',
  styleUrls: ['./browse-games.component.scss']
})
export class BrowseGamesComponent implements OnInit {
  
  gamesMaster: IGame[] = [];
  games: IGame[] = [];
  // gameIDs: IGame[] = [];
  ageRatingFormat: number = 0;
  searchTerm: FormControl = new FormControl;

  constructor(public _gameService: IgdbService, public dialog: MatDialog) {
    this.searchTerm.valueChanges
    .pipe(debounceTime(1000))
    .pipe(distinctUntilChanged())
    .subscribe(searchTerm => this.games = this.searchGame(searchTerm))
  }

  ngOnInit() {
    this._gameService.getGamesFull().subscribe(x => {
      this.gamesMaster = x;
      this.games = x
      })
  }

  //Adds a list of games with all data to games master
  testButton() {
    console.log(this.gamesMaster.length);
    console.log(this.games.length);
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

  searchGame(filterBy: string) {
    if (filterBy.length > 0) {
      filterBy = filterBy.toLocaleLowerCase();
      let filterResults = this.gamesMaster.filter((g: IGame) => 
        g.name.toLocaleLowerCase().indexOf(filterBy) !== -1);

      console.table(filterResults);
      return filterResults;
    }
    else {
      return this.gamesMaster;
    }
  }
}
