import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrsOnlineComponent } from './krs-online.component';

describe('KrsOnlineComponent', () => {
  let component: KrsOnlineComponent;
  let fixture: ComponentFixture<KrsOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KrsOnlineComponent]
    });
    fixture = TestBed.createComponent(KrsOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
