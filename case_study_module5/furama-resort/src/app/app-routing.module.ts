import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeCustomerComponent} from './customer/home-customer/home-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {CustomerUsingServiceComponent} from './customer/customer-using-service/customer-using-service.component';
import {HomeContractComponent} from './contract/home-contract/home-contract.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {CreateContractDetailComponent} from './contract/create-contract-detail/create-contract-detail.component';
import {HomeEmployeeComponent} from './employee/home-employee/home-employee.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {EditEmployeeComponent} from './employee/edit-employee/edit-employee.component';
import {HomeServiceComponent} from './service/home-service/home-service.component';
import {CreateServiceComponent} from './service/create-service/create-service.component';
import {EditServiceComponent} from './service/edit-service/edit-service.component';
import {BodyComponent} from './layout/body/body.component';
import {DeleteCustomerComponent} from './customer/delete-customer/delete-customer.component';


const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'customerList',
    component: HomeCustomerComponent
  },
  {
    path: 'customerCreate',
    component: CreateCustomerComponent
  },
  {
    path: 'customerEdit/:customerId',
    component: EditCustomerComponent
  },
  {
    path: 'customerDelete/:customerId',
    component: DeleteCustomerComponent
  },
  {
    path: 'customerUsingService',
    component: CustomerUsingServiceComponent
  },
  {
    path: 'contractList',
    component: HomeContractComponent
  },
  {
    path: 'contractCreate',
    component: CreateContractComponent
  },
  {
    path: 'contractDetail',
    component: CreateContractDetailComponent
  },
  {
    path: 'employeeList',
    component: HomeEmployeeComponent
  },
  {
    path: 'employeeCreate',
    component: CreateEmployeeComponent
  },
  {
    path: 'employeeEdit',
    component: EditEmployeeComponent
  },
  {
    path: 'serviceList',
    component: HomeServiceComponent
  },
  {
    path: 'serviceCreate',
    component: CreateServiceComponent
  },
  {
    path: 'serviceEdit',
    component: EditServiceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
