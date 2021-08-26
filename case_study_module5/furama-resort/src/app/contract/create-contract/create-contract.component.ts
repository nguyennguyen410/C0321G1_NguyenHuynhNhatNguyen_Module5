import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  createContractForm: FormGroup;
  constructor() {
    this.createContractForm = new FormGroup({
      contractId: new FormControl('', Validators.required),
      dateContract: new FormGroup({
        contractStartDate: new FormControl('', Validators.required),
        contractEndDate: new FormControl('', Validators.required),
      }, this.checkDateContract()),
      /*contractTotalMoney: new FormControl('', Validators.min(0)),*/
      contractDeposit: new FormControl('', Validators.min(0)),
      employee: new FormControl('', Validators.required),
      customer: new FormControl('', Validators.required),
      service: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  private checkDateContract() {
    return undefined;
  }

  getContract(): void {
    console.log(this.createContractForm.value);
  }
}
