import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-contract-detail',
  templateUrl: './create-contract-detail.component.html',
  styleUrls: ['./create-contract-detail.component.css']
})
export class CreateContractDetailComponent implements OnInit {
  createContractDetailForm: FormGroup;
  constructor() {
    this.createContractDetailForm = new FormGroup({
      contractDetailId: new FormControl('', Validators.required),
      contract: new FormControl('', Validators.required),
      attachService: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.min(0)),
      totalMoney: new FormControl('', Validators.min(0)),
    });
  }

  ngOnInit(): void {
  }

  getContractDetail() {
    console.log(this.createContractDetailForm.value);
  }
}
