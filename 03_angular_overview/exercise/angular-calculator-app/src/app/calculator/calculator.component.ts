import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  num1: number;
  num2: number;
  sum: number;
  sub: number;
  multi: number;
  division: number;

  calculatorNumber(): void {
    this.sum = Number(this.num1) + Number(this.num2);
    this.sub = Number(this.num1) - Number(this.num2);
    this.multi = Number(this.num1) * Number(this.num2);
    this.division = Number(this.num1) / Number(this.num2);
  }

  calculatorNumber2(num1, num2): void {
    this.sum = Number(num1) + Number(num2);
    this.sub = Number(num1) - Number(num2);
    this.multi = Number(num1) * Number(num2);
    this.division = Number(num1) / Number(num2);
  }

}
