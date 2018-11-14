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
  
  displayedColumns: string[] = ['title','developer','publisher','releaseDate','ageRating','actionButtons'];
  gamesMaster: IGame[] = [];
  games: IGame[] = [];
  gameIDs: IGame[] = [];
  ageRatingFormat: number = 0;
  searchTerm: FormControl = new FormControl;

  constructor(public _gameService: IgdbService, public dialog: MatDialog) {
    // this.searchTerm.valueChanges
    // .pipe(debounceTime(1000))
    // .pipe(distinctUntilChanged())
    // .subscribe(searchTerm => this.games = this.searchGame(searchTerm))
  }

  ngOnInit() {
    // this.ageRatingFormat = 0;
    // this._gameService.getGames().subscribe(data =>
    //   this.gamesMaster = data);
    // this._gameService.getGames().subscribe(data =>
    //   this.games = data);

    this._gameService.getGamesIDs().subscribe(x =>
      this.gameIDs = x);
  }

  testButton() {
    if(this.gameIDs) {
      console.log('IDs found')
      if(this.gameIDs.length > 0) {
        this.gameIDs.forEach(g =>
          this._gameService.getGameInfo(g.id).subscribe(x => this.games.push(x[0])))
      }
    }
    console.log(this.games);
  }

  changeAgeRating(): void {
    if(this.ageRatingFormat == 0)
    { this.ageRatingFormat = 1; }
    else
    { this.ageRatingFormat = 0}

    console.log(this.games);
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

  searchGame(filterBy: string) {
    // if (filterBy.length > 0) {
    //   filterBy = filterBy.toLocaleLowerCase();
    //   let filterResults = this.gamesMaster.filter((g: IGame) => 
    //     g.name.toLocaleLowerCase().indexOf(filterBy) !== -1);

    //   console.table(filterResults);
    //   return filterResults;
    // }
    // else {
    //   console.table(this.gamesMaster);
    //   return this.gamesMaster;
    // }
  }
}
