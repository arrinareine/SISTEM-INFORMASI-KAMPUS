import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumDiskusiComponent } from './forum-diskusi.component';

describe('ForumDiskusiComponent', () => {
  let component: ForumDiskusiComponent;
  let fixture: ComponentFixture<ForumDiskusiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumDiskusiComponent]
    });
    fixture = TestBed.createComponent(ForumDiskusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
