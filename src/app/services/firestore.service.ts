import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IReviewGame } from '../../models/user-review.model';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable()
export class FirestoreService {
  gameReviewCollection: AngularFirestoreCollection<IReviewGame>;
  errorMessage: string; 

  constructor(private _http: HttpClient, private _afs:AngularFirestore) { 
    this.gameReviewCollection = _afs.collection<IReviewGame>("reviews");
  }

  //add reviews to firebase
  addReview(review: IReviewGame): void{
    console.log("Adding review object: ");
    console.log(review);
    this._afs.collection<IReviewGame>("reviews").doc(review.gameID.toString()).set(review);
  }

  //Gest reviews for a specified game id
  getGameReviews(gameID: number){
    return this._afs.collection<IReviewGame>("reviews", ref => ref.where('gameID','==',gameID)).valueChanges();
  }

  //any errors
  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
