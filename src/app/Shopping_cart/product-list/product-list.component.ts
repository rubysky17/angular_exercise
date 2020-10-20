import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() phoneList;

  constructor() { }
  addProduct(phone: any) {
    this.phoneEmitter.emit(phone)
  }

  @Output() phoneEmitter = new EventEmitter();

  ngOnInit(): void {
  }
  

}
