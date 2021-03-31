import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {SupplementalPanelComponent} from './menu-panel.component';

describe('MenuPanelComponent', () => {
  let component: SupplementalPanelComponent;
  let fixture: ComponentFixture<SupplementalPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SupplementalPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplementalPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
