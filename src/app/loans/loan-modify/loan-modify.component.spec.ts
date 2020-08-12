import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanModifyComponent } from './loan-modify.component';

describe('LoanModifyComponent', () => {
  let component: LoanModifyComponent;
  let fixture: ComponentFixture<LoanModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
