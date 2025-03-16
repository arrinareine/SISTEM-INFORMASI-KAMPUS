import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengumumanUniversitasComponent } from './pengumuman-universitas.component';

describe('PengumumanUniversitasComponent', () => {
  let component: PengumumanUniversitasComponent;
  let fixture: ComponentFixture<PengumumanUniversitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PengumumanUniversitasComponent]
    });
    fixture = TestBed.createComponent(PengumumanUniversitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
