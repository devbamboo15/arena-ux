import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypogrphyDocumentationComponent } from './typogrphy-documentation.component';

describe('TypogrphyDocumentationComponent', () => {
  let component: TypogrphyDocumentationComponent;
  let fixture: ComponentFixture<TypogrphyDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypogrphyDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypogrphyDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
