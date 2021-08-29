import {Component, Inject, OnInit} from '@angular/core';
import {CustomerService} from '../../../service-resort/customer-service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../../service-resort/employee-service/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public dialog : MatDialogRef<DeleteEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) public data : any ) { }

  ngOnInit(): void {
  }

  delete(){
    this.employeeService.deleteEmployee(this.data.id).subscribe(()=>{
      this.dialog.close(true);

    })
  }
}
