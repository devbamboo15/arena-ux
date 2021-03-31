import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeadersDocumentationComponent } from './page-headers-documentation.component';

describe('PageHeadersDocumentationComponent', () => {
  let component: PageHeadersDocumentationComponent;
  let fixture: ComponentFixture<PageHeadersDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHeadersDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeadersDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
