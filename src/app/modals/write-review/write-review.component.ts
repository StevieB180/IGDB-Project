import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IGame } from 'src/models/game-model';
import { FirestoreService } from '../../services/firestore.service';
import { IReview } from 'src/models/user-review.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss'],
  providers: [FirestoreService]
})
export class WriteReviewComponent implements OnInit{
  rating: string;
  description: string;
  user: firebase.User;

  constructor( 
    private auth: AuthService,
    private _reviewService: FirestoreService,
    public dialogRef: MatDialogRef<WriteReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IGame) { }
    
  addReview(): void{
    console.log("Adding review by user ID " + this.user.uid + " to game ID " + this.data.id);
    console.log("rating: " + this.rating);
    console.log("description: " + this.description);

    let review: IReview = {
      userID : this.user.uid,
      gameID : this.data.id,
      rating : this.rating,
      description : this.description
    };
    
    this._reviewService.addReview(review);

    this.dialogRef.close();
  }

  ngOnInit() {
    this.auth.getUser().subscribe(x=> {
      this.user = x;
      console.log("User ID: " + x.uid);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getGameCover(g : IGame): string {
    return ('http:' + g.cover.url);
  }
}
