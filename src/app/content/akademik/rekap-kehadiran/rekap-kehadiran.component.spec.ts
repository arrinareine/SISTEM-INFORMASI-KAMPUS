import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapKehadiranComponent } from './rekap-kehadiran.component';

describe('RekapKehadiranComponent', () => {
  let component: RekapKehadiranComponent;
  let fixture: ComponentFixture<RekapKehadiranComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RekapKehadiranComponent]
    });
    fixture = TestBed.createComponent(RekapKehadiranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
