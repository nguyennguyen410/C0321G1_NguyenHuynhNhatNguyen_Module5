import {Component, OnInit} from '@angular/core';
import {Contract} from '../../Contract';
import {ContractService} from '../../../service-resort/contract-service/contract.service';
import {CustomerService} from '../../../service-resort/customer-service/customer.service';
import {EmployeeService} from '../../../service-resort/employee-service/employee.service';
import {ServiceService} from '../../../service-resort/service-service/service.service';
import {Customer} from '../../Customer';
import {Service} from '../../Service';
import {Employee} from '../../Employee';

@Component({
  selector: 'app-home-contract',
  templateUrl: './home-contract.component.html',
  styleUrls: ['./home-contract.component.css']
})
export class HomeContractComponent implements OnInit {
  p = 1;
  listCustomers: Customer[] = [];
  listServices: Service[] = [];
  listEmployees: Employee[] = [];
  listContracts: Contract[] = [];

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private employeeService: EmployeeService,
              private serviceService: ServiceService) {
    this.customerService.getAll().subscribe(value => this.listCustomers = value);
    this.serviceService.getAll().subscribe(value => this.listServices = value);
    this.employeeService.getAll().subscribe(value => this.listEmployees = value);

  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.contractService.getAll().subscribe(value => this.listContracts = value);
  }
}
