import { Component, OnInit } from '@angular/core';
import { IgdbService } from '../services/igdb.service';
import { IGame } from 'src/models/game-model';
import {FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { GameInfoComponent } from '../modals/game-info/game-info.component';

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

  openGameInfoModal(game: IGame): void {
    const dialogRef = this.dialog.open(GameInfoComponent, {
      maxWidth: '1000px',
      data: game
    })
  }

}
