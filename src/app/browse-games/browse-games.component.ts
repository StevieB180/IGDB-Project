import { Component, OnInit } from '@angular/core';
import { IgdbService } from '../services/igdb.service';
import { IGame, ICompany } from 'src/models/game-model';
import {FormControl} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from "rxjs/operators"

@Component({
  selector: 'app-browse-games',
  templateUrl: './browse-games.component.html',
  styleUrls: ['./browse-games.component.scss']
})
export class BrowseGamesComponent implements OnInit {
  //////////////////////////////////////////////////////////////////
  //Change this to toggle usage of sample games from json-server  //
  //(Remember to start it using 'json-server --watch db.json')    //
  //                                                              //
  //  FALSE = Uses API calls to IGDB                              //
  //                                                              //
  //  TRUE  = Uses sample data from db.json                       //
  //                                                              //
  //////////////////////////////////////////////////////////////////
  useSampleGames = true;

  gamesMaster: IGame[] = [];
  games: IGame[] = [];
  
  searchTerm: FormControl = new FormControl;
  tableEnabled: boolean = false;

  constructor(public _gameService: IgdbService) {
    this.searchTerm.valueChanges
    .pipe(debounceTime(1000))
    .pipe(distinctUntilChanged())
    .subscribe(searchTerm => this.searchGame(searchTerm))
  }
 
  async ngOnInit() {
    if(this.useSampleGames) {
      await this._gameService.getSampleGames().subscribe(x => {
        this.games = x;
        this.gamesMaster = x;
        })
      if(this.games.length == 0)
      { console.log('No games found. Is the JSON server started?') }
    }
    else {
      await this._gameService.getGamesFull('games').subscribe(x => {
        this.games = x;
        this.gamesMaster = x;
        })
    }
    
    this.tableEnabled = true;
  } 

  //Adds a list of games with all data to games master
  testButton() {
    console.log(this.games);
  }

  async searchGame(filterBy: string) {
    this.tableEnabled = false;
    this.games.length = 0;

    if(filterBy.length > 0) {
      this._gameService.searchGames(filterBy).subscribe(x => {
        this.games = x;
      });

    }
    else {
      this.games = this.gamesMaster;
    }
    this.tableEnabled = true;
  }

  
  sortType: string = 'Name';
  changeSortType() {
    if(this.sortType == 'Name') {
      this.sortType = 'Date';
    }
    else if(this.sortType == 'Date') {
      this.sortType = 'Name';
    }

    this.performSort();
  }
  
  sortDirection: string = 'keyboard_arrow_up'
  changeSortDirection() {
    if(this.sortDirection == 'keyboard_arrow_up') {
      this.sortDirection = 'keyboard_arrow_down';
    }
    else if(this.sortDirection == 'keyboard_arrow_down') {
      this.sortDirection = 'keyboard_arrow_up';
    }

    this.performSort();
  }

  performSort() {
    console.log('Sort Type = ' + this.sortType)
    console.log('Sort Direction = ' + this.sortDirection)
  }
}
