import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/models/game-model';

@Component({
  selector: 'app-game-row',
  templateUrl: './game-row.component.html',
  styleUrls: ['./game-row.component.scss']
})
export class GameRowComponent implements OnInit {

  @Input('GameInput') game: IGame;

  constructor() { }

  ngOnInit() {
  }

}
