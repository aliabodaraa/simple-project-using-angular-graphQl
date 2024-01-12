import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ReviewDataService } from '../review-data.service';

@Component({
  selector: 'app-single-review',
  templateUrl: './single-review.component.html',
  styleUrls: ['./single-review.component.scss'],
})
export class SingleReviewComponent implements OnInit {
  review: any;
  constructor(private data: ReviewDataService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          let id = params.get('id');
          return this.data.getReview(id!);
        })
      )
      .subscribe((review_data: any) => {
        console.log(review_data.data.review);
        this.review = review_data.data.review;
      });
  }
}
