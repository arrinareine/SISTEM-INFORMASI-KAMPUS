import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadwalAkademikComponent } from './jadwal-akademik.component';

describe('JadwalAkademikComponent', () => {
  let component: JadwalAkademikComponent;
  let fixture: ComponentFixture<JadwalAkademikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JadwalAkademikComponent]
    });
    fixture = TestBed.createComponent(JadwalAkademikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
