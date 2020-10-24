import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-chair-bill',
  templateUrl: './chair-bill.component.html',
  styleUrls: ['./chair-bill.component.scss'],
})
export class ChairBillComponent implements OnInit, OnChanges {
  chairListBill = [
    { soGhe: 3, tenGhe: 'số 3', gia: 100, trangThai: false },
    { soGhe: 4, tenGhe: 'số 4', gia: 100, trangThai: false },
    { soGhe: 5, tenGhe: 'số 5', gia: 100, trangThai: false },
  ];
  sumBill: number = this.chairListBill.reduce((sum, item, index) => {
    sum = sum + item.gia;
    return sum;
  }, 0);
  @Input() selectedChair;
  addChair() {
    let index = this.chairListBill.findIndex(
      (item) => (item.soGhe = this.selectedChair.soGhe)
    );
    index === -1 && this.chairListBill.push(this.selectedChair);
  }
  constructor() {}
  ngOnInit(): void {}
  ngOnChanges() {}
}
