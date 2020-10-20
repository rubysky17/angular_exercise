import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnChanges {
  @Input() phoneProduct: any;

  constructor() {}
  listCart = [];

  ngOnInit(): void {}
  removePhone(id: number) {
    let index: number;
    this.listCart.findIndex((item) => item.id === id);
    index !== -1 && this.listCart.splice(index, 1);
    this.total = this.listCart.reduce((totalMoney, phone, index) => {
      totalMoney += phone.amount * phone.price;
      return totalMoney;
    }, 0);
  }
  increaseAmount(id: number) {
    let index: number;
    index = this.listCart.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.listCart[index].amount += 1;
    }
    this.total = this.listCart.reduce((totalMoney, phone, index) => {
      totalMoney += phone.amount * phone.price;
      return totalMoney;
    }, 0);
  }
  decreaseAmount(id: number) {
    let index: number;
    index = this.listCart.findIndex((item) => item.id === id);
    if (index !== -1) {
      if (this.listCart[index].amount > 1) {
        this.listCart[index].amount -= 1;
      }
    }
    this.total = this.listCart.reduce((totalMoney, phone, index) => {
      totalMoney += phone.amount * phone.price;
      return totalMoney;
    }, 0);
  }
  total: number;
  ngOnChanges() {
    if (this.phoneProduct) {
      let index: number;
      index = this.listCart.findIndex(
        (item) => item.id === this.phoneProduct.id
      );
      if (index !== -1) {
        this.phoneProduct.amount += 1;
      } else {
        this.listCart.push(this.phoneProduct);
      }
      this.total = this.listCart.reduce((totalMoney, phone, index) => {
        totalMoney += phone.amount * phone.price;
        return totalMoney;
      }, 0);
    } else {
      return;
    }
  }
}
