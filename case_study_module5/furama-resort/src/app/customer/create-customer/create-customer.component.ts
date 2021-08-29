import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service-resort/customer-service/customer.service';
import {Router} from '@angular/router';
import {CustomerType} from '../../customer-type';
import {Gender} from '../../gender';
import {Customer} from '../../Customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm: FormGroup;
  listCustomerTypes: CustomerType[] = [];
  listGenders: Gender[] = [];
  listCustomers: Customer[] = [];

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
    this.customerService.getAllType().subscribe(value => this.listCustomerTypes = value);
    this.customerService.getAllGender().subscribe(value => this.listGenders = value);

  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(value => {
      this.listCustomers = value;
      console.log(this.listCustomers);
    });

  }

  saveCustomer(): void {
    const customer = this.createCustomerForm.value;
    console.log(customer);
    this.customerService.save(customer).subscribe(() => {
      alert('Create Success');
    });
    this.createCustomerForm.reset();
    this.router.navigateByUrl('customerList');
  }
}
