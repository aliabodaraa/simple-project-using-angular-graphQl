import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ReviewerComponent } from './reviewer/reviewer.component';

const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'categories/:id/products', component: ProductComponent },
  {
    path: 'categories/:id/products/:id/reviews',
    component: ReviewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
