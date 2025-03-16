import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TugasKuisComponent } from './tugas-kuis.component';

describe('TugasKuisComponent', () => {
  let component: TugasKuisComponent;
  let fixture: ComponentFixture<TugasKuisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TugasKuisComponent]
    });
    fixture = TestBed.createComponent(TugasKuisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
