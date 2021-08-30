import { Injectable } from '@angular/core';
import {Customer} from '../../app/Customer';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from '../../app/customer-type';
import {Gender} from '../../app/gender';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  listCustomers: Customer[] = [];
  listCustomerTypes: CustomerType[] = [];
  listGender: Gender[] = [];
  /*customer1: Customer = new Customer("KH-0001","Gold", "Nguyen Van A",'1993/08/23',1,111111111,'9095111111',"nva@gmail.com","DaNang");
  customer2: Customer = new Customer("KH-0002","Gold", "Nguyen Thi A","1993/08/23",0,222222222,"9095111111","nva@gmail.com","DaNang");
  customer3: Customer = new Customer("KH-0003","Gold", "Nguyen Van A","1993/08/23",1,333333333,"9095111111","nva@gmail.com","DaNang");
  */
  private API_URL = "http://localhost:3000/customerList";
  private API_URL_TYPE = "http://localhost:3000/customerType";
  private API_URL_GENDER = "http://localhost:3000/genderList";

  constructor(private httpClient: HttpClient) {
    /*this.listCustomers.push(this.customer1);
    this.listCustomers.push(this.customer2);
    this.listCustomers.push(this.customer3);*/
  }

  getAll() {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }
  getAllType() {
    return this.httpClient.get<CustomerType[]>(this.API_URL_TYPE);
  }
  getAllGender() {
    return this.httpClient.get<Gender[]>(this.API_URL_GENDER);
  }
  save(customer){
    return this.httpClient.post<Customer>(this.API_URL, customer);
  }

  findById(id: number):Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + '/' + id);
  }

  editCustomer(id: number, customer: Customer) {
    return this.httpClient.patch<Customer>(this.API_URL + '/' + id, customer);
  }

  deleteCustomer(id: number) {
    return this.httpClient.delete<Customer>(this.API_URL + '/' + id);
  }

  searchCustomer(name: string){
    return this.httpClient.get<Customer[]>(this.API_URL + '?customerName_like=' + name);
  }
  sortId(){
    return this.httpClient.get<Customer[]>(this.API_URL + '?_sort=customerId&_order=desc');
  }
}
