import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service-resort/customer-service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm: FormGroup;

  constructor(private customerService: CustomerService,
              private router: Router) {
    this.createCustomerForm = new FormGroup({
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
  }

  ngOnInit(): void {
  }

  saveCustomer(): void {
    const customer = this.createCustomerForm.value;
    this.customerService.save(customer);
    this.router.navigateByUrl('customerList');
  }
}
