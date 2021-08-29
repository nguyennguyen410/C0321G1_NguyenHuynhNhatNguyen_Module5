import { Component, OnInit } from '@angular/core';
import {Employee} from '../../Employee';
import {EmployeeService} from '../../../service-resort/employee-service/employee.service';
import {DeleteCustomerComponent} from '../../customer/delete-customer/delete-customer.component';
import {MatDialog} from '@angular/material/dialog';
import {DeleteEmployeeComponent} from '../delete-employee/delete-employee.component';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.css']
})
export class HomeEmployeeComponent implements OnInit {
  listEmployee: Employee[] = [];
  searchName: string;
  p = 1;
  constructor(private employeeService: EmployeeService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.employeeService.getAll().subscribe(value => this.listEmployee = value);
  }

  deleteEmployee(id: number, employeeName: string) {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
      width: '500px',
      data: {
        id: id,
        nameEmployee: employeeName
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
    this.employeeService.searchEmployee(this.searchName).subscribe(value => this.listEmployee = value);
    this.p = 1;
  }
}
