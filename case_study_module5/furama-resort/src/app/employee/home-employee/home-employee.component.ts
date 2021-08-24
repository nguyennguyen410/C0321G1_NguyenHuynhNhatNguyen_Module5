import { Component, OnInit } from '@angular/core';
import {Employee} from '../../Employee';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.css']
})
export class HomeEmployeeComponent implements OnInit {

  listEmployee  = [
    { employeeId: "E-0001",
      employeeName: "Tran Van A",
      employeeBirthday: "1992/08/23",
      employeeIdCard: 222222222,
      employeeSalary: 500,
      employeePhone: "0935111111",
      employeeEmail: "tva@gmail.com",
      employeeAddress: "TP.HCM",
      position: "Phuc vu",
      educationDegree: "Cao Dang",
      division: "Quan ly",
      username: "tva"},
    {employeeId: "E-0002",
      employeeName: "Tran Van B",
      employeeBirthday: "1992/08/23",
      employeeIdCard: 222222222,
      employeeSalary: 500,
      employeePhone: "0935111111",
      employeeEmail: "tva@gmail.com",
      employeeAddress: "TP.HCM",
      position: "Phuc vu",
      educationDegree: "Cao Dang",
      division: "Quan ly",
      username: "tvb"},
    {employeeId: "E-0003",
      employeeName: "Tran Van C",
      employeeBirthday: "1992/08/23",
      employeeIdCard: 222222222,
      employeeSalary: 500,
      employeePhone: "0935111111",
      employeeEmail: "tva@gmail.com",
      employeeAddress: "TP.HCM",
      position: "Ke toan",
      educationDegree: "Cao Dang",
      division: "Quan ly",
      username: "tvc"}
  ];
  p = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
