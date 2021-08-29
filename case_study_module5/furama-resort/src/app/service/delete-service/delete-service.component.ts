import {Component, Inject, OnInit} from '@angular/core';
import {EmployeeService} from '../../../service-resort/employee-service/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ServiceService} from '../../../service-resort/service-service/service.service';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.css']
})
export class DeleteServiceComponent implements OnInit {

  constructor(private serviceService: ServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public dialog : MatDialogRef<DeleteServiceComponent>,
              @Inject(MAT_DIALOG_DATA) public data : any ) { }

  ngOnInit(): void {
  }

  delete(){
    this.serviceService.deleteService(this.data.id).subscribe(()=>{
      this.dialog.close(true);
    })
  }

}
