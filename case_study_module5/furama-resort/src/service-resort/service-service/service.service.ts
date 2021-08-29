import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../../app/Employee';
import {Position} from '../../app/position';
import {Service} from '../../app/Service';
import {RentType} from '../../app/rent-type';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private API_URL_SERVICE = "http://localhost:3000/serviceList";
  private API_URL_RENTTYPE = "http://localhost:3000/rentTypeList";

  constructor(private httpClient: HttpClient) { }


  getAll() {
    return this.httpClient.get<Service[]>(this.API_URL_SERVICE);
  }

  getAllRentType() {
    return this.httpClient.get<RentType[]>(this.API_URL_RENTTYPE);
  }

  save(service){
    return this.httpClient.post<Service>(this.API_URL_SERVICE, service);
  }

  editService(id: number, service: Service) {
    return this.httpClient.patch<Service>(this.API_URL_SERVICE + '/' + id, service);
  }

  findById(id: number):Observable<Service> {
    return this.httpClient.get<Service>(this.API_URL_SERVICE + '/' + id);
  }

  deleteService(id: number) {
    return this.httpClient.delete<Service>(this.API_URL_SERVICE + '/' + id);
  }
}
