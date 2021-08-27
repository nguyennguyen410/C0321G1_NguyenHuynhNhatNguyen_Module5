import { Injectable } from '@angular/core';
import {Contract} from '../../app/Contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor() { }

  listContract: Contract[] = [
    {
      contractId: "HD-0001",
      contractStartDate: "2021/08/23",
      contractEndDate: "2021/08/25",
      contractDeposit: 100,
      contractTotalMoney: 500,
      employee: "Tran Van A",
      customer: "Nguyen Van A",
      service: "DV-0001",
      contractDetails: "None",
    },
    {
      contractId: "HD-0002",
      contractStartDate: "2021/08/23",
      contractEndDate: "2021/08/25",
      contractDeposit: 100,
      contractTotalMoney: 500,
      employee: "Tran Van A",
      customer: "Nguyen Van A",
      service: "DV-0002",
      contractDetails: "None",
    },
    {
      contractId: "HD-0003",
      contractStartDate: "2021/08/23",
      contractEndDate: "2021/08/25",
      contractDeposit: 100,
      contractTotalMoney: 500,
      employee: "Tran Van A",
      customer: "Nguyen Van A",
      service: "DV-0002",
      contractDetails: "None",
    }
  ];

  getAll() {
    return this.listContract;
  }
}
