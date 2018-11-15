import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/models/game-model';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.scss']
})
export class GamesTableComponent implements OnInit {
  @Input('GamesInput') games: IGame[];
  displayedColumns: string[] = ['title','developer','publisher','releaseDate','ageRating','actionButtons'];

  constructor() { }

  ngOnInit() {
  }

  getGameCover(g : IGame): string {
    return ('http:' + g.cover.url);
  }

}
