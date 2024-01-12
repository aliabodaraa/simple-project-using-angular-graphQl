import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.scss'],
})
export class ReviewerComponent implements OnInit {
  reviews: any;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getReviews().subscribe(({ data }: any) => {
      console.log(data, data.reviews);
      this.reviews = data.reviews;
    });
  }
}
