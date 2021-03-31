import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsDocumentationComponent } from './modals-documentation.component';

describe('ModalsDocumentationComponent', () => {
  let component: ModalsDocumentationComponent;
  let fixture: ComponentFixture<ModalsDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
