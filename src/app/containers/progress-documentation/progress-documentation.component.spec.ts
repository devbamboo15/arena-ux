import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressDocumentationComponent } from './progress-documentation.component';

describe('ProgressDocumentationComponent', () => {
  let component: ProgressDocumentationComponent;
  let fixture: ComponentFixture<ProgressDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
