import { Injectable } from '@angular/core';
import {Contract} from '../../app/Contract';
import {Customer} from '../../app/Customer';
import {CustomerType} from '../../app/customer-type';
import {Gender} from '../../app/gender';
import {Service} from '../../app/Service';
import {Employee} from '../../app/Employee';
import {CustomerService} from '../customer-service/customer.service';
import {EmployeeService} from '../employee-service/employee.service';
import {ServiceService} from '../service-service/service.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  listContracts: Contract[] = [];
  private API_URL_CONTRACT = "http://localhost:3000/contractList";
  constructor(private httpClient: HttpClient) {

  }

  getAll() {
    return this.httpClient.get<Contract[]>(this.API_URL_CONTRACT);
  }

  save(contract){
    return this.httpClient.post<Contract>(this.API_URL_CONTRACT, contract);
  }
}
