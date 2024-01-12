import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://localhost:4000';
  constructor(public http: HttpClient) {}
  getStandardOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
  getCategories() {
    let options = this.getStandardOptions();
    let body = {
      query: `
        query{
          categories {
            id
            name
          }
        }
      `,
    };
    return this.http.post(this.url, body, options);
  }

  getProducts() {
    let options = this.getStandardOptions();
    let body = {
      query: `
        query{
          products {
            id
            name
                 description
                 quantity
                 image
                 price
                 onSale
                 category {
                   id
                   name
                 }
                 reviews{title}
         }
        }
      `,
    };
    return this.http.post(this.url, body, options);
  }

  getReviews() {
    let options = this.getStandardOptions();
    let body = {
      query: `
        query{
          reviews {
            title
          }
        }
      `,
    };
    return this.http.post(this.url, body, options);
  }
}
