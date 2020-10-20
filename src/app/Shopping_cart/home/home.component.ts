import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  smartPhones = [
    {
      id: 1,
      name: 'Oppo R1',
      image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
      description: 'Sản phẩm của china',
      price: 450,
      invetory: 10,
      rating: 3,
      amount: 1,
    },
    {
      id: 2,
      name: 'Samsung Galaxy Note 9',
      image:
        'https://hoanghamobile.com/Uploads/Originals/2018/08/10/201808100934091115_mg-6364-1.jpg;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg',
      description: 'Sản phẩm của Hàn Quốc',
      price: 200,
      invetory: 15,
      rating: 5,
      amount: 1,
    },
    {
      id: 3,
      name: 'Iphone XS',
      image:
        'https://product.hstatic.net/1000379731/product/iphone_xs_64gb_golsd_be2e4c79bc4c4c2c81bbfeb35e0cda13_master.jpg',
      description: 'Sản phẩm của US',
      price: 600,
      invetory: 20,
      rating: 4,
      amount: 1,
    },
  ];
  phoneProduct: any;
  addProduct(phone: any) {
    this.phoneProduct = phone;
  }
  ngOnInit(): void {}
}
