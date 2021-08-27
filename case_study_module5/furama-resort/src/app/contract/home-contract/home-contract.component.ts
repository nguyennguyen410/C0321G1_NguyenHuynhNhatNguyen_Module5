import {Component, OnInit} from '@angular/core';
import {Contract} from '../../Contract';
import {ContractService} from '../../../service-resort/contract-service/contract.service';

@Component({
  selector: 'app-home-contract',
  templateUrl: './home-contract.component.html',
  styleUrls: ['./home-contract.component.css']
})
export class HomeContractComponent implements OnInit {
  p = 1;
  listContract: Contract[] = [];
  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.listContract = this.contractService.getAll();
  }
}
