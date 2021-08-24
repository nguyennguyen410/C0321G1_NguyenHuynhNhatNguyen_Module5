import { Component } from '@angular/core';
import {Item} from "./Item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product';
  listItem: Item[] = [
    {id: 1, name: "CBR-200", stock: 10},
    {id: 2, name: "CBR-300", stock: 5},
    {id: 3, name: "CBR-400", stock: 10},
    {id: 4, name: "CBR-500", stock: 5},
    {id: 5, name: "CBR-1000", stock: 10},
  ]
  item: any;
  deleteItem (id: number){
    this.item = this.listItem.findIndex(
      elementProduct => elementProduct.id === id
    )
    this.listItem.splice(this.item, 1);
  }
}
