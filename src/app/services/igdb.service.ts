import { Injectable } from '@angular/core';
import { IGame } from 'src/models/game-model';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IgdbService {
  ENDPOINT: string = 'https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com';
  KEY: string = '92a038d46b2e12937fd501eab181afa7';

  constructor(private _http: HttpClient) { }

  //#region initial games (sample and API)

  //Returns initial games from local json-server -> 'json-server --watch db.json'
  getSampleGames() {
    return this._http.get<IGame[]>('http://localhost:3000/games');
  }

  //Get initial game list from API
  getGamesFull(type: string) {
    console.log('Getting ' + type);
    return this._http.get<IGame[]>(this.ENDPOINT + `/${type}/?fields=*&limit=10&count?&filter[release_dates.date][gt]=788982179000`,
    {headers: {
      "Accept":"application/json",
      "user-key":this.KEY
    }}) 
  }
  //#endregion

  //#region Extra game info
 
  //Get the developer info on a game
  getDev(type: number) {
      return this._http.get(this.ENDPOINT + `/companies/${type}`,
      {headers: {
        "Accept":"application/json",
        "user-key":this.KEY
      }});
    } 

  //Get the genre of a game
  getGen(type: number) {
    return this._http.get(this.ENDPOINT + `/genres/${type}`,
    {headers: {
      "Accept":"application/json",
      "user-key":this.KEY
    }});
  }

  getPlat(type: number) {
    return this._http.get(this.ENDPOINT + `/platforms/${type}`,
    {headers: {
      "Accept":"application/json",
      "user-key":this.KEY
    }});
  } 
  //#endregion

  //#region searching
  
  //Master search method to handle asyncs
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
    return this._http.get<IGame[]>(this.ENDPOINT + '/games/?search='+ searchTerm + '?fields=*&limit=10',
    {headers: {
      "Accept":"application/json",
      "user-key":this.KEY
    }})
  }
  
  // Gets all information on a game
  getGameInfo(gameID: number) {
    console.log('Getting game info for ' + gameID)
    return this._http.get(this.ENDPOINT + '/games/'+ gameID +'?fields=*',
    {headers: {
      "Accept":"application/json",
      "user-key":this.KEY,
      "X-Requested-With":"origin"
    }}) 
  }
  //#endregion
}

// return this._http.get<IGame[]>(this.ENDPOINT + '/games/?fields=*&limit=10&expand=game,game.developers,game.publishers,game.genres&filter[release_dates.date][lt]=1999-12-31',
// return this._http.get<IGame[]>(this.ENDPOINT + `/${type}/?fields=*&limit=10&order=popularity:desc`,
// return this._http.get<IGame[]>(this.ENDPOINT + `/${type}/?fields=*&limit=10&order=created_at:asc`,&order=release_dates.date:asc