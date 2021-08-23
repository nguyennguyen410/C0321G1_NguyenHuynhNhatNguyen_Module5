import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThNameCardComponent } from './th-name-card.component';

describe('ThNameCardComponent', () => {
  let component: ThNameCardComponent;
  let fixture: ComponentFixture<ThNameCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThNameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThNameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
