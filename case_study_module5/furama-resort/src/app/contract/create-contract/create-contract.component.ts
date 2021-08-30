import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../Customer';
import {Service} from '../../Service';
import {Employee} from '../../Employee';
import {CustomerService} from '../../../service-resort/customer-service/customer.service';
import {EmployeeService} from '../../../service-resort/employee-service/employee.service';
import {ServiceService} from '../../../service-resort/service-service/service.service';
import {Contract} from '../../Contract';
import {ContractService} from '../../../service-resort/contract-service/contract.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  createContractForm: FormGroup;
  listCustomers: Customer[] = [];
  listServices: Service[] = [];
  listEmployees: Employee[] = [];
  contract: Contract;
  constructor(private customerService: CustomerService,
              private employeeService: EmployeeService,
              private serviceService: ServiceService,
              private contractService: ContractService,
              private route: Router) {
    this.createContractForm = new FormGroup({
      contractId: new FormControl('', Validators.required),
      dateContract: new FormGroup({
        contractStartDate: new FormControl('', Validators.required),
        contractEndDate: new FormControl('', Validators.required)
      }, this.checkDateContract),
      contractTotalMoney: new FormControl('', Validators.min(0)),
      contractDeposit: new FormControl('', Validators.min(0)),
      employee: new FormControl('', Validators.required),
      customer: new FormControl('', Validators.required),
      service: new FormControl('', Validators.required)
    });

    this.customerService.getAll().subscribe(value => this.listCustomers = value);
    this.serviceService.getAll().subscribe(value => this.listServices = value);
    this.employeeService.getAll().subscribe(value => this.listEmployees = value);
  }

  ngOnInit(): void {
  }

  private checkDateContract(dateCheck: AbstractControl) {
    // @ts-ignore
    let date1 = new Date(dateCheck.value.contractStartDate);
    console.log(date1);
    // @ts-ignore
    let date2 = new Date(dateCheck.value.contractEndDate);
    let date3 = new Date();
    console.log(date3);
    console.log(date3 > date2 ? "ok": "no");
    return date2 >= date1 ? null: {errorCode: true};
  }

  getContract(): void {
    this.contract = this.createContractForm.value;
    this.contractService.save(this.contract).subscribe(() => {
      alert('Create Success');
    });
    this.route.navigateByUrl('contractList');
  }
}
