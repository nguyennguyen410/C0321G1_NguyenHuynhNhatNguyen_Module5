import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Position} from '../../position';
import {RentType} from '../../rent-type';
import {EmployeeService} from '../../../service-resort/employee-service/employee.service';
import {Router} from '@angular/router';
import {ServiceService} from '../../../service-resort/service-service/service.service';
import {Service} from '../../Service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  createServiceForm: FormGroup;
  listRentType: RentType[] = [];
  serviceForm: Service;
  constructor(private serviceService: ServiceService,
              private route: Router) {
    this.createServiceForm = new FormGroup({
      serviceId: new FormControl('', [Validators.required, Validators.pattern('^(DV)-[0-9]{4}$')]),
      serviceName: new FormControl('', Validators.required),
      serviceArea: new FormControl('', Validators.min(0)),
      serviceCost: new FormControl('', Validators.min(0)),
      serviceMaxPeople: new FormControl('', Validators.min(0)),
      rentType: new FormControl('', Validators.required),
      serviceType: new FormControl('', Validators.required),
      standardRoom: new FormControl('', Validators.required),
      descriptionOtherConvenience: new FormControl('', Validators.required),
      poolArea: new FormControl('', Validators.min(0)),
      numberOfFloor: new FormControl('', Validators.min(0))
    });
    this.serviceService.getAllRentType().subscribe(value => this.listRentType = value);
  }

  ngOnInit(): void {
  }

  getService(): void {
    this.serviceForm = this.createServiceForm.value;
    console.log(this.serviceForm);
    this.serviceService.save(this.serviceForm).subscribe(() => {
      alert('Create Success');
    });
    this.createServiceForm.reset();
    this.route.navigateByUrl('serviceList');
  }
}
