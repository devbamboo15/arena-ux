import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipsDocumentationComponent } from './tooltips-documentation.component';

describe('TooltipsDocumentationComponent', () => {
  let component: TooltipsDocumentationComponent;
  let fixture: ComponentFixture<TooltipsDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipsDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipsDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
