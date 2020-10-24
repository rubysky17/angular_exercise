import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chair-bill',
  templateUrl: './chair-bill.component.html',
  styleUrls: ['./chair-bill.component.scss'],
})
export class ChairBillComponent implements OnInit, DoCheck {
  chairListBill = [];
  sumBill: number;
  sumChair: number;
  @Input() selectedChair;

  constructor() {}
  ngOnInit(): void {}

  ngDoCheck() {
    let index = this.chairListBill.findIndex(
      (item) => item.soGhe === this.selectedChair.soGhe
    );
    if (index === -1) {
      if (this.selectedChair.trangThai) {
        this.chairListBill.push(this.selectedChair);
      }
    } else {
      if (!this.selectedChair.trangThai) {
        this.chairListBill.splice(index, 1);
      }
    }
    // tính tổng số tiền
    this.sumBill = this.chairListBill.reduce((sum, item, index) => {
      sum = sum + item.gia;
      return sum;
    }, 0);
    // tính tổng ghế
    this.sumChair = this.chairListBill.reduce((sum, item, index) => {
      sum = index + 1;
      return sum;
    }, 0);
  }
  cancelChair(soGhe: number) {
    let index = this.chairListBill.findIndex((item) => item.soGhe === soGhe);
    this.chairListBill[index].trangThai = false;
    this.chairListBill.splice(index, 1);
  }
}
