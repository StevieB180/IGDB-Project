import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IGame } from 'src/models/game-model';
import { FirestoreService } from '../../services/firestore.service';
import { IReview } from 'src/models/user-review.model';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss'],
  providers: [FirestoreService]
})
export class WriteReviewComponent{
  constructor( private _reviewService: FirestoreService,
    public dialogRef: MatDialogRef<WriteReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IGame) { }
    // reviewID: string;
    gameID: number;
    rating: string;
    description: string;
    addReview(): void{
    // console.log("reviewID =" + this.reviewID);
    console.log("gameID =" + this.data.id);
    console.log("rating =" + this.rating);
    console.log("description =" + this.description);
    let review: IReview = {
    // reviewID : this.reviewID,
    gameID : this.data.id,
    rating : this.rating,
    description : this.description
    };
    this._reviewService.addReview(review);
    //redirect to the product-list component
    //this.router.navigate(['/review-list']);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getGameCover(g : IGame): string {
    return ('http:' + g.cover.url);
  }
}
