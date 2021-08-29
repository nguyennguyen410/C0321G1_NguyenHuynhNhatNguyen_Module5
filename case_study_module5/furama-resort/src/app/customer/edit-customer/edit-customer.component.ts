import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service-resort/customer-service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../Customer';
import {Observable} from 'rxjs';
import {CustomerType} from '../../customer-type';
import {Gender} from '../../gender';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: Customer;
  customerTypeList: CustomerType[] = [];
  genderList: Gender[] = [];
  id: number;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  editCustomerForm = new FormGroup({
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

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.params.id);
    console.log(this.id);

    this.customerService.getAllType().subscribe(value => this.customerTypeList = value);
    this.customerService.getAllGender().subscribe(value => {this.genderList = value;
      console.log(this.genderList);});

    this.customerService.findById(this.id).subscribe(value => {
      this.customer = value;
      console.log(this.customer);
      this.editCustomerForm.patchValue(this.customer);
    });

  }

  editCustomer() {
    const customer = this.editCustomerForm.value;
    this.customerService.editCustomer(this.id, customer).subscribe(() => {
      this.editCustomerForm.reset();
    this.router.navigateByUrl('customerList');});

  }
}
