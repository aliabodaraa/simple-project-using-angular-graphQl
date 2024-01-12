import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CategoryDataService } from '../category-data.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss'],
})
export class SingleCategoryComponent implements OnInit {
  category: any;
  constructor(
    private data: CategoryDataService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          let id = params.get('id');
          return this.data.getCategory(id!);
        })
      )
      .subscribe((category_data: any) => {
        console.log(category_data.data.category);
        this.category = category_data.data.category;
      });
  }
}
