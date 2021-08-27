import { Injectable } from '@angular/core';
import {Customer} from '../../app/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  listCustomers: Customer[] = [];
  customer1: Customer = new Customer("KH-0001","Gold", "Nguyen Van A",'1993/08/23',1,111111111,'9095111111',"nva@gmail.com","DaNang");
  customer2: Customer = new Customer("KH-0002","Gold", "Nguyen Thi A","1993/08/23",0,222222222,"9095111111","nva@gmail.com","DaNang");
  customer3: Customer = new Customer("KH-0003","Gold", "Nguyen Van A","1993/08/23",1,333333333,"9095111111","nva@gmail.com","DaNang");
  constructor() {
    this.listCustomers.push(this.customer1);
    this.listCustomers.push(this.customer2);
    this.listCustomers.push(this.customer3);
  }

  getAll() {
    return this.listCustomers;
  }
  save(customer: Customer){
    this.listCustomers.push(customer);
  }

  findById(id: string): Customer {
    return this.listCustomers.find(customer => customer.customerId === id);
  }

  editCustomer(customer) {
    this.listCustomers.find(cusEdit => cusEdit.customerId === customer.customerId).customerName = customer.customerName;
    this.listCustomers.find(cusEdit => cusEdit.customerId === customer.customerId).customerType = customer.customerType;
    this.listCustomers.find(cusEdit => cusEdit.customerId === customer.customerId).customerBirthday = customer.customerBirthday;
    this.listCustomers.find(cusEdit => cusEdit.customerId === customer.customerId).customerGender = customer.customerGender;
    this.listCustomers.find(cusEdit => cusEdit.customerId === customer.customerId).customerIdCard = customer.customerIdCard;
    this.listCustomers.find(cusEdit => cusEdit.customerId === customer.customerId).customerPhone = customer.customerPhone;
    this.listCustomers.find(cusEdit => cusEdit.customerId === customer.customerId).customerEmail = customer.customerEmail;
    this.listCustomers.find(cusEdit => cusEdit.customerId === customer.customerId).customerAddress = customer.customerAddress;
  }
  customerDeleteIndex: number;
  deleteCustomer(customerId: string) {
    this.customerDeleteIndex = this.listCustomers.findIndex(cusDel => cusDel.customerId === customerId);
    console.log(this.listCustomers.splice(this.customerDeleteIndex, 1));
  }
}
