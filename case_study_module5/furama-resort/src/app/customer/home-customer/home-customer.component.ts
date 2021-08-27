import { Component, OnInit } from '@angular/core';
import {Customer} from '../../Customer';
import {CustomerService} from '../../../service-resort/customer-service/customer.service';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements OnInit {
  p = 1;
  listCustomers: Customer[] = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
   this.listCustomers = this.customerService.getAll();
  }
}
