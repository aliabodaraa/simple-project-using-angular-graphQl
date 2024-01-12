import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService extends DataService {
  constructor(http: HttpClient) {
    super(http);
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

  getProduct(id: string) {
    let options = this.getStandardOptions();
    let body = {
      query: `
        query{
          product(id:"${id}") {
              name
              description
              quantity
              image
              price
              onSale,
              category {
                id
              }
          }
        }`,
    };
    return this.http.post(this.url, body, options);
  }
}
