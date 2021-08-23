import { Component, OnInit } from '@angular/core';
import {Service} from '../../Service';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent implements OnInit {
  listService: Service[] = [
    {
      serviceId: "DV-0001",
      serviceName: "Villa",
      serviceArea: 150,
      serviceCost: 300,
      serviceMaxPeople: 10,
      rentType: "Date",
      serviceType: "Villa-1",
      standardRoom: "Vip",
      descriptionOtherConvenience: "V-Vip",
      poolArea: 50,
      numberOfFloor: 2,
      contract: "HD-0001",
    },
    {
      serviceId: "DV-0002",
      serviceName: "Villa",
      serviceArea: 150,
      serviceCost: 300,
      serviceMaxPeople: 10,
      rentType: "Date",
      serviceType: "Villa-2",
      standardRoom: "Vip",
      descriptionOtherConvenience: "V-Vip",
      poolArea: 50,
      numberOfFloor: 2,
      contract: "HD-0002",
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
