import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../../service-resort/employee-service/employee.service';
import {Position} from '../../position';
import {Division} from '../../division';
import {EducationDegree} from '../../education-degree';
import {Employee} from '../../Employee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  listPosition: Position[] = [];
  listDivision: Division[] = [];
  listEducationDegree: EducationDegree[] = [];
  employee: Employee;
  createEmployeeForm: FormGroup;

  constructor(private employeeService: EmployeeService,
              private route: Router) {
    this.createEmployeeForm = new FormGroup({
      employeeId: new FormControl('', [Validators.required,
        Validators.pattern('^(NV)-[0-9]{4}$')]),
      employeeName: new FormControl('', Validators.required),
      employeeBirthday: new FormControl('', Validators.required),
      employeeIdCard: new FormControl('', [Validators.required,
        Validators.pattern('^[0-9]{9}$')]),
      employeeSalary: new FormControl('', Validators.min(1)),
      employeePhone: new FormControl('', [Validators.required,
        Validators.pattern('^(84)-[0-9]{9}$')]),
      employeeEmail: new FormControl('', [Validators.required, Validators.email]),
      employeeAddress: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      educationDegree: new FormControl('', Validators.required),
      division: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required)
    });
    this.employeeService.getPosition().subscribe(value => this.listPosition = value);
    this.employeeService.getAllDivision().subscribe(value => this.listDivision = value);
    this.employeeService.getAllEducation().subscribe(value => this.listEducationDegree = value);
  }

  ngOnInit(): void {
  }

  getEmployee() {
    this.employee = this.createEmployeeForm.value;
    console.log(this.employee);
    this.employeeService.save(this.employee).subscribe(() => {
      alert('Create Success');
    });
    this.createEmployeeForm.reset();
    this.route.navigateByUrl('employeeList');
  }
}
