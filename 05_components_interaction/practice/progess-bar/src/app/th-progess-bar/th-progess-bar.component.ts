import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-th-progess-bar',
  templateUrl: './th-progess-bar.component.html',
  styleUrls: ['./th-progess-bar.component.css']
})
export class ThProgessBarComponent implements OnInit {

  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;

  constructor() { }

  ngOnInit(): void {
  }

  loading() {
    let interval = setInterval(() => {
      this.progress = +this.progress + 5;
      if (this.progress == 100) {
        clearInterval(interval);
      }
    }, 1000);
  }

}
