import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../service-resort/customer-service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../Customer';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customer: Customer;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const id = this.activatedRoute.snapshot.params.customerId;
    this.customer = this.customerService.findById(id);
    this.customerService.deleteCustomer(this.customer.customerId);
    this.router.navigateByUrl('customerList');
  }

  ngOnInit(): void {
  }

}
