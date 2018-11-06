import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-games',
  template: `
    <p>
      browse-games works!
    </p>
  `,
  styles: []
})
export class BrowseGamesComponent implements OnInit {
  testVar:string;
  constructor() { }

  ngOnInit() {
  }

}
