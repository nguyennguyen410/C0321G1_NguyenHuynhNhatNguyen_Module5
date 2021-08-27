import { Component, OnInit } from '@angular/core';
import {Service} from '../../Service';
import {ServiceService} from '../../../service-resort/service-service/service.service';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent implements OnInit {
  listService: Service[] = [];
  p = 1;
  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.listService = this.serviceService.getAll();
  }
}
