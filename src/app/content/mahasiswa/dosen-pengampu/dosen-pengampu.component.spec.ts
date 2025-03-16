import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosenPengampuComponent } from './dosen-pengampu.component';

describe('DosenPengampuComponent', () => {
  let component: DosenPengampuComponent;
  let fixture: ComponentFixture<DosenPengampuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DosenPengampuComponent]
    });
    fixture = TestBed.createComponent(DosenPengampuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
