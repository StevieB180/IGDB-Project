import { Component, OnInit } from '@angular/core';
import { IgdbService } from '../services/igdb.service';
import { IGame } from 'src/models/game-model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-browse-games',
  templateUrl: './browse-games.component.html',
  styleUrls: ['./browse-games.component.scss']
})
export class BrowseGamesComponent implements OnInit {

  games: IGame[];
  ageRatingFormat: number;
  mobile: boolean;
  searchTerm: FormControl = new FormControl;

  constructor(public gameService: IgdbService) { }

  ngOnInit() {
    this.ageRatingFormat = 0;
    this.games = this.gameService.getGames()

    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
  }

}
