import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsDocumentationComponent } from './dropdowns-documentation.component';

describe('DropdownsDocumentationComponent', () => {
  let component: DropdownsDocumentationComponent;
  let fixture: ComponentFixture<DropdownsDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownsDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownsDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
