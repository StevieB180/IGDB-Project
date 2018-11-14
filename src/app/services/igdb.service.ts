import { Injectable } from '@angular/core';
import { IGame } from 'src/models/game-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IgdbService {

  constructor(private _http: HttpClient) {
  }
  //Returns a list of sample games
  getSampleGames(): Observable<IGame[]> {
    return this._http.get<IGame[]>('http://localhost:3000/games');
  }

  getGamesIDs(): Observable<IGame[]> {
    return this._http.get<IGame[]>('https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&limit=2 ',
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
}