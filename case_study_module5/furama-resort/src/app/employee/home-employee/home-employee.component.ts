import { Component, OnInit } from '@angular/core';
import {Employee} from '../../Employee';
import {EmployeeService} from '../../../service-resort/employee-service/employee.service';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.css']
})
export class HomeEmployeeComponent implements OnInit {
  listEmployee: Employee[] = [];
  p = 1;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.listEmployee = this.employeeService.getAll();
  }
}
