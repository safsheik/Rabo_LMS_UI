import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanStartComponent } from './loan-start.component';

describe('LoanStartComponent', () => {
  let component: LoanStartComponent;
  let fixture: ComponentFixture<LoanStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
