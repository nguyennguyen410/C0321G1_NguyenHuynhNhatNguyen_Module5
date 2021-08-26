import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  createServiceForm: FormGroup;
  constructor() {
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
  }

  ngOnInit(): void {
  }

  getService(): void {
    console.log(this.createServiceForm.value);
  }
}
