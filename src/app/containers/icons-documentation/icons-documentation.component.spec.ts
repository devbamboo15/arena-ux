import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDocumentationComponent } from './icons-documentation.component';

describe('IconsDocumentationComponent', () => {
  let component: IconsDocumentationComponent;
  let fixture: ComponentFixture<IconsDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
