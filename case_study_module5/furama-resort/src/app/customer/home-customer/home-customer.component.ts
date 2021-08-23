import { Component, OnInit } from '@angular/core';
import {Customer} from '../../Customer';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements OnInit {
  listCustomers = [];

  constructor() { }

  ngOnInit(): void {
    this.listCustomers.push(
      new Customer("KH-0001","Gold", "Nguyen Van A","1993/08/23",1,111111111
        ,"9095111111","nva@gmail.com","DaNang"));
    this.listCustomers.push(
      new Customer("KH-0002","Gold", "Nguyen Thi A","1993/08/23",0,222222222
        ,"9095111111","nva@gmail.com","DaNang"));
    this.listCustomers.push(
      new Customer("KH-0003","Gold", "Nguyen Van A","1993/08/23",1,333333333
        ,"9095111111","nva@gmail.com","DaNang"));
  }

}
