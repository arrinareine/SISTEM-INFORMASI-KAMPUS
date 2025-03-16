import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresensiOnlineComponent } from './presensi-online.component';

describe('PresensiOnlineComponent', () => {
  let component: PresensiOnlineComponent;
  let fixture: ComponentFixture<PresensiOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresensiOnlineComponent]
    });
    fixture = TestBed.createComponent(PresensiOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
