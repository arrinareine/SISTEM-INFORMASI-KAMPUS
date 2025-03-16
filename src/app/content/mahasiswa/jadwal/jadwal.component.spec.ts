import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadwalComponent } from './jadwal.component';

describe('JadwalComponent', () => {
  let component: JadwalComponent;
  let fixture: ComponentFixture<JadwalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JadwalComponent]
    });
    fixture = TestBed.createComponent(JadwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
