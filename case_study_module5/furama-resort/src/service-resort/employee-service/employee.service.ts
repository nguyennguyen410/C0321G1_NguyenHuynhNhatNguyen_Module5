import { Injectable } from '@angular/core';
import {Customer} from '../../app/Customer';
import {Employee} from '../../app/Employee';
import {Position} from '../../app/position';
import {Division} from '../../app/division';
import {EducationDegree} from '../../app/education-degree';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  listEmployees: Employee[] = [];

  private API_URL_EMPLOYEE = "http://localhost:3000/employeeList";
  private API_URL_POSITION = "http://localhost:3000/positionList";
  private API_URL_DIVISION = "http://localhost:3000/divisionList";
  private API_URL_EDUCATIONDEGREE = "http://localhost:3000/educationDegreeList";

  constructor(private httpClient: HttpClient) { }


  getAll() {
    return this.httpClient.get<Employee[]>(this.API_URL_EMPLOYEE);
  }

  getPosition() {
    return this.httpClient.get<Position[]>(this.API_URL_POSITION);
  }

  getAllDivision() {
    return this.httpClient.get<Division[]>(this.API_URL_DIVISION);
  }

  getAllEducation() {
    return this.httpClient.get<EducationDegree[]>(this.API_URL_EDUCATIONDEGREE);
  }

  save(employee){
    return this.httpClient.post<Employee>(this.API_URL_EMPLOYEE, employee);
  }

  editEmployee(id: number, employee: Employee) {
    return this.httpClient.patch<Employee>(this.API_URL_EMPLOYEE + '/' + id, employee);
  }

  findById(id: number):Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_URL_EMPLOYEE + '/' + id);
  }

  deleteEmployee(id: number) {
    return this.httpClient.delete<Employee>(this.API_URL_EMPLOYEE + '/' + id);
  }

  searchEmployee(name: string){
    return this.httpClient.get<Employee[]>(this.API_URL_EMPLOYEE + '?employeeName_like=' + name);
  }
}
