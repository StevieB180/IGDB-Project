import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/models/game-model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  @Input('GamesInput') games : IGame[];

  constructor() { }

  ngOnInit() {
  }

}
