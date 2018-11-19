import { Injectable } from '@angular/core';
import { IGame, ICompany } from 'src/models/game-model';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IgdbService {
  ENDPOINT: string = 'https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com';
  KEY: string = '79e43c586c74f14a4c13dfb52a859e26';
  constructor(private _http: HttpClient) {[]
   }

  //Returns sample games from json-server -> 'json-server --watch db.json'
  getSampleGames() {
    return this._http.get<IGame[]>('http://localhost:3000/games');
  }

  getGamesFull(type: string) {
    console.log('Getting ' + type);
    // return this._http.get<IGame[]>('https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&limit=10&expand=game',
   //MK// return this._http.get<IGame[]>(this.ENDPOINT + '/games/?fields=*&limit=10&expand=game,game.developers,game.publishers,game.genres&filter[release_dates.date][lt]=1999-12-31',
   // return this._http.get<IGame[]>(this.ENDPOINT + `/${type}/?fields=*&limit=10&order=popularity:desc`,
    //return this._http.get<IGame[]>(this.ENDPOINT + `/${type}/?fields=*&limit=10&order=created_at:asc`,&order=release_dates.date:asc
    return this._http.get<IGame[]>(this.ENDPOINT + `/${type}/?fields=*&limit=10&count?&filter[release_dates.date][gt]=788982179000`,
    {headers: {
      "Accept":"application/json",
      "user-key":this.KEY
    }}) 
  }


  //Searching Stuff \/
  searchGames(searchTerm:string) {
    // let gameIDs: IGame[]= [];
    // let gamesList: IGame[] = [];
    // this.searchForGameIDs(searchTerm).subscribe(x => {
    //   gameIDs = x
    //   if(gameIDs.length > 1) {
    //     console.log('Getting individual game information for all games')
    //     gameIDs.forEach(async g =>
    //       // await this.getGameInfo(g.id).toPromise().then(x => gamesList.push(x[0])))
    //   }
    //   else {
    //     console.log('No game IDs');
    //   }})

    // console.log(gamesList);
    // return of(gamesList);
    //
    //FIX LATER
  }

  //Gets IDs of games based on search term
  searchForGameIDs(searchTerm:string) {
    return this._http.get<IGame[]>(this.ENDPOINT + '/games/?search='+ searchTerm + '?fields=*&limit=10',
    {headers: {
      "Accept":"application/json",
      "user-key":this.KEY
    }})
  }
  
  //Gets all information on a game
  // getGameInfo(gameID: number) {
  //   console.log('Getting game info for ' + gameID)
  //   return this._http.get(this.ENDPOINT + '/games/'+ gameID +'?fields=*&game.developers,game.publishers,game.genres',
  //   {headers: {
  //     "Accept":"application/json",
  //     "user-key":this.KEY,
  //     "X-Requested-With":"origin"
  //   }}) 
  // }
}     