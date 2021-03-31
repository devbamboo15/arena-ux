import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsDocumentationComponent } from './lists-documentation.component';

describe('ListsDocumentationComponent', () => {
  let component: ListsDocumentationComponent;
  let fixture: ComponentFixture<ListsDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
