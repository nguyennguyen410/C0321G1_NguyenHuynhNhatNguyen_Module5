import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createEmployeeForm: FormGroup;
  constructor() {
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
  }

  ngOnInit(): void {
  }

  getEmployee() {
    console.log(this.createEmployeeForm.value);
  }
}
