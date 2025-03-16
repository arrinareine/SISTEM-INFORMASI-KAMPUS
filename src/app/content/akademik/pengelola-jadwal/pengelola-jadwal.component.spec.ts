import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengelolaJadwalComponent } from './pengelola-jadwal.component';

describe('PengelolaJadwalComponent', () => {
  let component: PengelolaJadwalComponent;
  let fixture: ComponentFixture<PengelolaJadwalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PengelolaJadwalComponent]
    });
    fixture = TestBed.createComponent(PengelolaJadwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
