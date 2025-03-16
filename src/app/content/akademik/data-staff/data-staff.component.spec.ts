import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStaffComponent } from './data-staff.component';

describe('DataStaffComponent', () => {
  let component: DataStaffComponent;
  let fixture: ComponentFixture<DataStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataStaffComponent]
    });
    fixture = TestBed.createComponent(DataStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
