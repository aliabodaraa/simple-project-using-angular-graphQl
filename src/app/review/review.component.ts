import { Component, OnInit } from '@angular/core';
import { ReviewDataService } from './review-data.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewerComponent implements OnInit {
  reviews: any;
  constructor(private data: ReviewDataService) {}

  ngOnInit(): void {
    this.data.getReviews().subscribe(({ data }: any) => {
      console.log(data, data.reviews);
      this.reviews = data.reviews;
    });
  }
}
