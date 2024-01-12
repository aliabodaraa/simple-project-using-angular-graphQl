import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ReviewerComponent } from './review/review.component';
import { SingleProductComponent } from './product/single-product/single-product.component';
import { SingleCategoryComponent } from './category/single-category/single-category.component';
import { SingleReviewComponent } from './review/single-review/single-review.component';

const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'categories/:id/products', component: ProductComponent },
  {
    path: 'categories/:id/products/:id/reviews',
    component: ReviewerComponent,
  },
  { path: 'categories/:id', component: SingleCategoryComponent },
  { path: 'products/:id', component: SingleProductComponent },
  { path: 'reviews/:id', component: SingleReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
