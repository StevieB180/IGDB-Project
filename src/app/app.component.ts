import { Component, OnInit } from '@angular/core';
import { IgdbService } from './services/igdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private gameService: IgdbService) { }

  ngOnInit() { }

  
}
