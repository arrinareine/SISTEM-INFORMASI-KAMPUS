import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulEbookComponent } from './modul-ebook.component';

describe('ModulEbookComponent', () => {
  let component: ModulEbookComponent;
  let fixture: ComponentFixture<ModulEbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulEbookComponent]
    });
    fixture = TestBed.createComponent(ModulEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
