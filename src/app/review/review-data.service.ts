import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReviewDataService extends DataService {
  constructor(http: HttpClient) {
    super(http);
  }

  getReviews() {
    let options = this.getStandardOptions();
    let body = {
      query: `
        query{
          reviews {
            id
            title
          }
        }
      `,
    };
    return this.http.post(this.url, body, options);
  }

  getReview(id: string) {
    let options = this.getStandardOptions();
    let body = {
      query: `
        query{
          review(id:"${id}") {
            title
            date
            comment
            rating
          }
        }
      `,
    };
    return this.http.post(this.url, body, options);
  }
}
