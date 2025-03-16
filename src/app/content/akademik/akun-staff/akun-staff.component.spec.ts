import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkunStaffComponent } from './akun-staff.component';

describe('AkunStaffComponent', () => {
  let component: AkunStaffComponent;
  let fixture: ComponentFixture<AkunStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkunStaffComponent]
    });
    fixture = TestBed.createComponent(AkunStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
