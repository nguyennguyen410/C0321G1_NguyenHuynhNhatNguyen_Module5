import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service-resort/customer-service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../Customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: Customer;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const id = this.activatedRoute.snapshot.params.customerId;
    this.customer = this.customerService.findById(id);
    console.log(this.customer);
  }
  ngOnInit(): void {
    this.createCustomerForm.setValue(this.customer);
  }

  createCustomerForm = new FormGroup({
    customerId: new FormControl('', [Validators.required,
      Validators.pattern('^KH-[0-9]{4}$')]),
    customerType: new FormControl('', Validators.required),
    customerName: new FormControl('', Validators.required),
    customerBirthday: new FormControl('', Validators.required),
    customerGender: new FormControl('', Validators.required),
    customerIdCard: new FormControl('', [Validators.required,
      Validators.pattern('^[0-9]{9}$')]),
    customerPhone: new FormControl('', [Validators.required,
      Validators.pattern('^(84)-[0-9]{9}$')]),
    customerEmail: new FormControl('', [Validators.required, Validators.email]),
    customerAddress: new FormControl('', Validators.required),
  });

  editCustomer() {
    const customer = this.createCustomerForm.value;
    this.customerService.editCustomer(customer);
    this.createCustomerForm.reset();
    this.router.navigateByUrl('customerList');
  }
}
