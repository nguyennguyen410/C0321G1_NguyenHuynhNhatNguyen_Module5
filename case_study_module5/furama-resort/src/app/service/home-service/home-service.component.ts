import { Component, OnInit } from '@angular/core';
import {Service} from '../../Service';
import {ServiceService} from '../../../service-resort/service-service/service.service';
import {DeleteEmployeeComponent} from '../../employee/delete-employee/delete-employee.component';
import {MatDialog} from '@angular/material/dialog';
import {DeleteServiceComponent} from '../delete-service/delete-service.component';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent implements OnInit {
  listService: Service[] = [];
  p = 1;
  constructor(private serviceService: ServiceService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.serviceService.getAll().subscribe(value => this.listService = value);
  }

  deleteService(id: number, serviceName: string) {
    const dialogRef = this.dialog.open(DeleteServiceComponent, {
      width: '500px',
      data: {
        id: id,
        nameService: serviceName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.ngOnInit();
      }
    });
  }
}
