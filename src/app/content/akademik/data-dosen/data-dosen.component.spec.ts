import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDosenComponent } from './data-dosen.component';

describe('DataDosenComponent', () => {
  let component: DataDosenComponent;
  let fixture: ComponentFixture<DataDosenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataDosenComponent]
    });
    fixture = TestBed.createComponent(DataDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
