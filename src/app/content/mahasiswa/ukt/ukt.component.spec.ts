import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UktComponent } from './ukt.component';

describe('UktComponent', () => {
  let component: UktComponent;
  let fixture: ComponentFixture<UktComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UktComponent]
    });
    fixture = TestBed.createComponent(UktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
