import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkunMahasiswaComponent } from './akun-mahasiswa.component';

describe('AkunMahasiswaComponent', () => {
  let component: AkunMahasiswaComponent;
  let fixture: ComponentFixture<AkunMahasiswaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkunMahasiswaComponent]
    });
    fixture = TestBed.createComponent(AkunMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
