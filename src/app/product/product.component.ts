import { Component, OnInit } from '@angular/core';
import { ProductDataService } from './product-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: any;
  constructor(private data: ProductDataService) {}

  ngOnInit(): void {
    this.data.getProducts().subscribe(({ data }: any) => {
      console.log(data.products);
      this.products = data.products;
    });
  }
}
