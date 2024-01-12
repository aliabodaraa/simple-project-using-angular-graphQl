import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ReviewerComponent } from './review/review.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleCategoryComponent } from './category/single-category/single-category.component';
import { SingleProductComponent } from './product/single-product/single-product.component';
import { SingleReviewComponent } from './review/single-review/single-review.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    ReviewerComponent,
    SingleCategoryComponent,
    SingleProductComponent,
    SingleReviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
