import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  // services
  cateList: any;
  constructor(private _categoryService: CategoryService) {}

  //lifecycle chạy lúc đầu
  ngOnInit(): void {
    this.cateList = this._categoryService.cateList;
  }
}
