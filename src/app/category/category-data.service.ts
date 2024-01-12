import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryDataService extends DataService {
  constructor(http: HttpClient) {
    super(http);
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

  getCategory(id: string) {
    let options = this.getStandardOptions();
    let body = {
      query: `
        query{
          category(id:"${id}") {
            id
            name
          }
        }
      `,
    };
    return this.http.post(this.url, body, options);
  }
}
