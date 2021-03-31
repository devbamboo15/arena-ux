import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarsDocumentationComponent } from './avatars-documentation.component';

describe('AvatarsDocumentationComponent', () => {
  let component: AvatarsDocumentationComponent;
  let fixture: ComponentFixture<AvatarsDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarsDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarsDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
