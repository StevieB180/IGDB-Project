// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FirestoreService {

//   constructor() { }
// }
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IReview, IReviewGame } from '../../models/user-review.model';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { catchError, tap, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';


@Injectable()
export class FirestoreService {
  gameReviewCollection: AngularFirestoreCollection<IReviewGame>;
  // review: Observable<IReview[]>;
  // allReview: IReview[];
  errorMessage: string; 

  constructor(private _http: HttpClient, private _afs:AngularFirestore) { 
    this.gameReviewCollection = _afs.collection<IReviewGame>("reviews");
  }
  //add reviews to a collection
  addReview(review: IReviewGame): void{
    console.log("Adding review object: ");
    console.log(review);
    this._afs.collection<IReviewGame>("reviews").doc(review.gameID.toString()).set(review);
  }

  getGameReviews(gameID: number){
    // return this._afs.collection<IReviewGame>("reviews").doc(gameID.toString()).get();
    return this._afs.collection<IReviewGame>("reviews", ref => ref.where('gameID','==',gameID)).valueChanges();
  }

  //any errors
  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
