import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyComponent } from './layout/body/body.component';
import { HomeCustomerComponent } from './customer/home-customer/home-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { CustomerUsingServiceComponent } from './customer/customer-using-service/customer-using-service.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { HomeEmployeeComponent } from './employee/home-employee/home-employee.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { CreateServiceComponent } from './service/create-service/create-service.component';
import { HomeServiceComponent } from './service/home-service/home-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { HomeContractComponent } from './contract/home-contract/home-contract.component';
import { CreateContractDetailComponent } from './contract/create-contract-detail/create-contract-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeCustomerComponent,
    CreateCustomerComponent,
    CustomerUsingServiceComponent,
    CreateEmployeeComponent,
    HomeEmployeeComponent,
    EditCustomerComponent,
    EditEmployeeComponent,
    CreateServiceComponent,
    HomeServiceComponent,
    EditServiceComponent,
    CreateContractComponent,
    HomeContractComponent,
    CreateContractDetailComponent
  ],
    imports: [
        NgxPaginationModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
