import { Component, OnInit } from '@angular/core';
import {Customer} from '../../Customer';
import {CustomerService} from '../../../service-resort/customer-service/customer.service';
import {CustomerType} from '../../customer-type';
import {Gender} from '../../gender';
import {MatDialog} from '@angular/material/dialog';
import {DeleteCustomerComponent} from '../delete-customer/delete-customer.component';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements OnInit {
  p = 1;
  listCustomers: Customer[] = [];
  searchName: string;
  constructor(private customerService: CustomerService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
   this.customerService.getAll().subscribe(value => this.listCustomers = value);
  }

  deleteCustomer(id: number, nameParam: string): void {
    const dialogRef = this.dialog.open(DeleteCustomerComponent, {
      width: '500px',
      data: {
        id: id,
        nameCus: nameParam
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.ngOnInit();
      }
    });
  }

  search() {
    this.customerService.searchCustomer(this.searchName).subscribe(value => this.listCustomers = value);
    this.p = 1;
  }
}
