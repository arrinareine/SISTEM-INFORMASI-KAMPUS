import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NilaiTranskripComponent } from './nilai-transkrip.component';

describe('NilaiTranskripComponent', () => {
  let component: NilaiTranskripComponent;
  let fixture: ComponentFixture<NilaiTranskripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NilaiTranskripComponent]
    });
    fixture = TestBed.createComponent(NilaiTranskripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
