import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css']
})
export class ProductChildComponent implements OnInit {
  @Output()
  deleteProduct = new EventEmitter();
  @Input()
  id: number;
  constructor() { }

  ngOnInit(): void {
  }


  deleteProducts() {
    this.deleteProduct.emit(this.id);
  }
}
