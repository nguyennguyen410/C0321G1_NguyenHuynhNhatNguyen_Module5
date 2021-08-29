import { Component, OnInit } from '@angular/core';
import {Employee} from '../../Employee';
import {Position} from '../../position';
import {Division} from '../../division';
import {EducationDegree} from '../../education-degree';
import {CustomerService} from '../../../service-resort/customer-service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../../service-resort/employee-service/employee.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id: number;
  employee: Employee;
  listPosition: Position[] = [];
  listDivision: Division[] = [];
  listEducationDegree: EducationDegree[] = [];
  editEmployeeForm: FormGroup;

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.editEmployeeForm = new FormGroup({
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
    this.id = Number(this.activatedRoute.snapshot.params.id);
    console.log(this.id);
    /*this.employeeService.getPosition().subscribe(value => this.listPosition = value);
    this.employeeService.getAllDivision().subscribe(value => this.listDivision = value);
    this.employeeService.getAllEducation().subscribe(value => this.listEducationDegree = value);*/

    this.employeeService.findById(this.id).subscribe(value => {
      this.employee = value;
      this.editEmployeeForm.patchValue(this.employee);
    });
  }

  editEmployee() {
    this.employee = this.editEmployeeForm.value;
    this.employeeService.editEmployee(this.id, this.employee).subscribe(() => {
      this.editEmployeeForm.reset();
      this.router.navigateByUrl('employeeList');});

  }

}
