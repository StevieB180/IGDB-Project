import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { IReview } from 'src/models/user-review.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  @Input() reviewCollection: IReview[];

  constructor() { }

  ngOnInit() {
  }

}
