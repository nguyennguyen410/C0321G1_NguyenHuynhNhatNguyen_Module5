import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-th-name-card',
  templateUrl: './th-name-card.component.html',
  styleUrls: ['./th-name-card.component.css']
})
export class ThNameCardComponent implements OnInit {

  @Input()
  cardName: string;
  @Input()
  email: string;
  @Input()
  phone: string;

  constructor() { }

  ngOnInit(): void {
  }

}
