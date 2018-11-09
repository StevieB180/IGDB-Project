import { Component, OnInit } from '@angular/core';
import { IgdbService } from '../services/igdb.service';
import { IGame } from 'src/models/game-model';

@Component({
  selector: 'app-browse-games',
  templateUrl: './browse-games.component.html',
  styleUrls: ['./browse-games.component.scss']
})
export class BrowseGamesComponent implements OnInit {

  games: IGame[];
  ageRatingFormat: number;

  constructor(public gameService: IgdbService) { }

  ngOnInit() {
    this.ageRatingFormat = 0;
    this.games = this.gameService.getGames()
  }

}
