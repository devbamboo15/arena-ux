import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsSpinnerComponent } from './notifications-spinner.component';

describe('NotificationsSpinnerComponent', () => {
  let component: NotificationsSpinnerComponent;
  let fixture: ComponentFixture<NotificationsSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
