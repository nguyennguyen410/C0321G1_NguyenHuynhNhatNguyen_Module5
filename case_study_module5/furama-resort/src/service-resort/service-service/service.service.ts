import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  listService = [
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
      numberOfFloor: 2
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
      numberOfFloor: 2
    },
    {
      serviceId: "DV-0003",
      serviceName: "House",
      serviceArea: 150,
      serviceCost: 300,
      serviceMaxPeople: 10,
      rentType: "Date",
      serviceType: "House-1",
      standardRoom: "Vip",
      descriptionOtherConvenience: "V-Vip",
      poolArea: 50,
      numberOfFloor: 2
    }
  ];

  getAll() {
    return this.listService;
  }
}
