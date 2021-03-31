import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesDocumentationComponent } from './badges-documentation.component';

describe('BadgesDocumentationComponent', () => {
  let component: BadgesDocumentationComponent;
  let fixture: ComponentFixture<BadgesDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
