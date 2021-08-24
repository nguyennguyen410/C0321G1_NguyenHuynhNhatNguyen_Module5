import {Component, OnInit} from '@angular/core';
import {Contract} from '../../Contract';

@Component({
  selector: 'app-home-contract',
  templateUrl: './home-contract.component.html',
  styleUrls: ['./home-contract.component.css']
})
export class HomeContractComponent implements OnInit {
  p = 1;
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
