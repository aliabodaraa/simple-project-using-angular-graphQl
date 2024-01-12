import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: any;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getCategories().subscribe(({ data }: any) => {
      console.log(data.categories);
      this.categories = data.categories;
    });
  }
}
