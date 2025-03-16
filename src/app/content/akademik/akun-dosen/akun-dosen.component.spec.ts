import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkunDosenComponent } from './akun-dosen.component';

describe('AkunDosenComponent', () => {
  let component: AkunDosenComponent;
  let fixture: ComponentFixture<AkunDosenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkunDosenComponent]
    });
    fixture = TestBed.createComponent(AkunDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
