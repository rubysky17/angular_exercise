import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-produc-item',
  templateUrl: './produc-item.component.html',
  styleUrls: ['./produc-item.component.scss']
})
export class ProducItemComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() newProductEmitter = new EventEmitter()
  addProduct(item: any) { 
    this.newProductEmitter.emit(item);
  }
}
