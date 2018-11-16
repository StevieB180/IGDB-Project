import { Injectable } from '@angular/core';
import { IGame } from 'src/models/game-model';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IgdbService {
  constructor(private _http: HttpClient) {[]
   }

  getSampleGames() {
    return this._http.get<IGame[]>('http://localhost:3000/games');
  }

  getGamesFull() {
    console.log('Getting inital games');
    return this._http.get<IGame[]>('https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&limit=10&expand=game',
    {headers: {
      "Accept":"application/json",
      "user-key":"43264b7755b2a0ed6f2f76f4374c6604"
    }})
  }


  //Searching Stuff \/
  searchGames(searchTerm:string) {
    let gameIDs: IGame[]= [];
    let gamesList: IGame[] = [];
    this.searchForGameIDs(searchTerm).subscribe(x => {
      gameIDs = x
      if(gameIDs.length > 1) {
        console.log('Getting individual game information for all games')
        gameIDs.forEach(async g =>
          await this.getGameInfo(g.id).toPromise().then(x => gamesList.push(x[0])))
      }
      else {
        console.log('No game IDs');
      }})

    console.log(gamesList);
    return of(gamesList);
  }

  //Gets IDs of games based on search term
  searchForGameIDs(searchTerm:string) {
    return this._http.get<IGame[]>('https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?search='+ searchTerm + '?fields=*&limit=10',
    {headers: {
      "Accept":"application/json",
      "user-key":"43264b7755b2a0ed6f2f76f4374c6604"
    }})
  }

  //Gets all information on a game
  getGameInfo(gameID: number) {
    console.log('Getting game info for ' + gameID)
    return this._http.get('https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/'+gameID+'?fields=*',
    {headers: {
      "Accept":"application/json",
      "user-key":"43264b7755b2a0ed6f2f76f4374c6604",
      "X-Requested-With":"origin"
    }})
  }
}