import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengumumanFakultasComponent } from './pengumuman-fakultas.component';

describe('PengumumanFakultasComponent', () => {
  let component: PengumumanFakultasComponent;
  let fixture: ComponentFixture<PengumumanFakultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PengumumanFakultasComponent]
    });
    fixture = TestBed.createComponent(PengumumanFakultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
