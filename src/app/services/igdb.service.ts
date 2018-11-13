import { Injectable } from '@angular/core';
import { IGame } from 'src/models/game-model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IgdbService {
  constructor(private _http: HttpClient) { }
  gamesMaster: IGame[];   //Master list of games. Holds all currently stored games
  games : IGame[];  //List of games that can be filtered/search & is returned to components
  ROOT_URL: string = "https://igdb-proxy-web.herokuapp.com/https://api-endpoint.igdb.com"

  getPosts() {
    


 
    let headers = new HttpHeaders()
    headers = headers.set('user-key','43264b7755b2a0ed6f2f76f4374c6604')
    headers = headers.set('X-Requested-With', 'IDGBProject')
    return this._http.get(this.ROOT_URL  + '/games/', {headers: headers})
 
 
 
  }

  //Returns a list of games
  getGames(): Observable<IGame[]> {
    return this._http.get<IGame[]>('http://localhost:3000/games');
  }
}