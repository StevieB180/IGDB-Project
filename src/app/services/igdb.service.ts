import { Injectable } from '@angular/core';
import { IGame } from 'src/models/game-model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IgdbService {
  gameIDs: IGame[] = [];
  gamesList: IGame[] = []

  constructor(private _http: HttpClient) {[]
   }

  //Returns a list of sample games
  getSampleGames(): Observable<IGame[]> {
    return this._http.get<IGame[]>('http://localhost:3000/games');
  }

  getGameIDs(): Observable<IGame[]> {
    return this._http.get<IGame[]>('https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&limit=10',
    {headers: {
      "Accept":"application/json",
      "user-key":"43264b7755b2a0ed6f2f76f4374c6604"
    }})
  }

  getGameInfo(gameID: number) {
    console.log('Getting game info for :' + gameID)
    return this._http.get('https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/'+gameID+'?fields=*',
    {headers: {
      "Accept":"application/json",
      "user-key":"43264b7755b2a0ed6f2f76f4374c6604",
      "X-Requested-With":"origin"
    }})
  }

  getGamesFull() {
    console.log('Before while loop');
    this.getGameIDs().subscribe(x => {
      this.gameIDs = x
    if(this.gameIDs.length > 1) {
      console.log('Getting individual game information for all games')
      this.gameIDs.forEach(async g =>
        await this.getGameInfo(g.id).toPromise().then(x => this.gamesList.push(x[0])))
      }
      else {
        console.log('No game IDs');
      }})

    console.log(this.gamesList);
    return of(this.gamesList);
  }

  searchForGameIDs(searchTerm:string) {
    return this._http.get<IGame[]>('https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?search='+ searchTerm + '?fields=*&limit=5 ',
    {headers: {
      "Accept":"application/json",
      "user-key":"43264b7755b2a0ed6f2f76f4374c6604"
    }})
  }
  
  searchGames(searchTerm:string) {
    this.searchForGameIDs(searchTerm).subscribe(x => {
      this.gameIDs = x
      if(this.gameIDs.length > 1) {
        console.log('Getting individual game information for all games')
        this.gameIDs.forEach(async g =>
          await this.getGameInfo(g.id).toPromise().then(x => this.gamesList.push(x[0])))
      }
      else {
        console.log('No game IDs');
      }})

    console.log(this.gamesList);
    return of(this.gamesList);
  }
}