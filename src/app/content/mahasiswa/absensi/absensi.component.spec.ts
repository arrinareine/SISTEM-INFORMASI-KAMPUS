import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsensiComponent } from './absensi.component';

describe('AbsensiComponent', () => {
  let component: AbsensiComponent;
  let fixture: ComponentFixture<AbsensiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsensiComponent]
    });
    fixture = TestBed.createComponent(AbsensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
