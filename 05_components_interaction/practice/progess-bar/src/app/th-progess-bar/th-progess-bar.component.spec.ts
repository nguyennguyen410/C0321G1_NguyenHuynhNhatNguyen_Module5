import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThProgessBarComponent } from './th-progess-bar.component';

describe('ThProgessBarComponent', () => {
  let component: ThProgessBarComponent;
  let fixture: ComponentFixture<ThProgessBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThProgessBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThProgessBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
