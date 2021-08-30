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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { DeleteServiceComponent } from './service/delete-service/delete-service.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


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
    CreateContractDetailComponent,
    DeleteCustomerComponent,
    DeleteEmployeeComponent,
    DeleteServiceComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
