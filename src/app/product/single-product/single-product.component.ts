import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  product: any;
  constructor(private data: ProductDataService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          let id = params.get('id');
          return this.data.getProduct(id!);
        })
      )
      .subscribe((product_data: any) => {
        console.log(product_data.data.product);
        this.product = product_data.data.product;
      });
  }
}
