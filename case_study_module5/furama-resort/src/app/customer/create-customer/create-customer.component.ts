import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm: FormGroup;
  constructor() {
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

  getCustomer(): void {
  console.log(this.createCustomerForm.value);
  }
}
