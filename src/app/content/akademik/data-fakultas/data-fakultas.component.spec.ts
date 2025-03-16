import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFakultasComponent } from './data-fakultas.component';

describe('DataFakultasComponent', () => {
  let component: DataFakultasComponent;
  let fixture: ComponentFixture<DataFakultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataFakultasComponent]
    });
    fixture = TestBed.createComponent(DataFakultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
