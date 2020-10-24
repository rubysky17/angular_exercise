import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges {
  constructor(private _productService: ProductService) {}
  productList: any;
  ngOnInit(): void {
    this.productList = this._productService.ProductList;
  }

  //lifecycle chạy khi mà input đầu vào thay đổi
  ngOnChanges() {}
}
