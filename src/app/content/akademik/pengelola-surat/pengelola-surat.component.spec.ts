import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengelolaSuratComponent } from './pengelola-surat.component';

describe('PengelolaSuratComponent', () => {
  let component: PengelolaSuratComponent;
  let fixture: ComponentFixture<PengelolaSuratComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PengelolaSuratComponent]
    });
    fixture = TestBed.createComponent(PengelolaSuratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
