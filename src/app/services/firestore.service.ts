// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FirestoreService {

//   constructor() { }
// }
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IReview } from '../../models/user-review.model';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';


@Injectable()
export class FirestoreService {
reviewCollection: AngularFirestoreCollection<IReview>;
review: Observable<IReview[]>;
allReview: IReview[];
errorMessage: string; 

  constructor(private _http: HttpClient, private _afs:AngularFirestore) { 
    this.reviewCollection = _afs.collection<IReview>("review");
  }
//add reviews to a collection
addReview(review: IReview): void{
   this.reviewCollection.add(review);
 }
//get the products from the collection
//and display them
  // getReview(): Observable<IReview[]> {
  //   this.review = this.reviewCollection.snapshotChanges().pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as IReview;
  //       console.log("getReview:data" + JSON.stringify(data));
  //       const id = a.payload.doc.id;
  //       console.log("getReview:id = "+id);
  //       return{id, ...data};
  //     }))
  //   );
  //   return this.review;
 
  // }

  // addAllReview(){
  //   this._http.get<IReview[]>(this._productUrl).subscribe(
  //     review => {
  //       this.allReview = review;
  //       for(let review of this.allReview){
  //         console.log("Adding: " + review.gameID);
  //         this.reviewCollection.add(review);
  //       }

  //     },
  //     error => (this.errorMessage = <any>error)
      
  //   );
  // }

  getGameReviews(gameID: number){
    let gameReviews: Observable<IReview[]>;
    // this._http.get<IReview[]>(this._productUrl).subscribe(r => { 
    //     r.forEach(e => {
    //       if(e.gameID == gameID)
    //       { gameReviews.push(e); }
    //     });
    //   }
    // )

    gameReviews = this.reviewCollection.snapshotChanges().pipe(
      map(action => action.map(a => {
        const data = a.payload.doc.data() as IReview;
        const id = a.payload.doc.id;

        if(data.gameID == gameID)
        { return { id, ...data} }
      }))
    )

    return gameReviews;
  }

//any errors
private handleError(err: HttpErrorResponse){
  console.log(err.message);
  return Observable.throw(err.message);
}
}
