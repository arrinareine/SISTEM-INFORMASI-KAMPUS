import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMakulComponent } from './data-makul.component';

describe('DataMakulComponent', () => {
  let component: DataMakulComponent;
  let fixture: ComponentFixture<DataMakulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataMakulComponent]
    });
    fixture = TestBed.createComponent(DataMakulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
