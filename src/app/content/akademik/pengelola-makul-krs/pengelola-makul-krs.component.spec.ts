import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengelolaMakulKRSComponent } from './pengelola-makul-krs.component';

describe('PengelolaMakulKRSComponent', () => {
  let component: PengelolaMakulKRSComponent;
  let fixture: ComponentFixture<PengelolaMakulKRSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PengelolaMakulKRSComponent]
    });
    fixture = TestBed.createComponent(PengelolaMakulKRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
