import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../rent-type';
import {Service} from '../../Service';
import {ServiceService} from '../../../service-resort/service-service/service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  editServiceForm: FormGroup;
  listRentType: RentType[] = [];
  serviceForm: Service;
  id: number;

  constructor(private serviceService: ServiceService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
    this.editServiceForm = new FormGroup({
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
    this.id = Number(this.activatedRoute.snapshot.params.id);
    console.log(this.id);
    this.serviceService.findById(this.id).subscribe(value => {
      this.serviceForm = value;
      this.editServiceForm.patchValue(this.serviceForm);
    });
  }

  getService(): void {
    this.serviceForm = this.editServiceForm.value;
    console.log(this.serviceForm);
    this.serviceService.editService(this.id, this.serviceForm).subscribe(() => {
      alert('Edit Success');
    });
    this.editServiceForm.reset();
    this.route.navigateByUrl('serviceList');
  }
}
