import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportDeskComponent } from './aux-support-desk.component';

describe('SupportDeskComponent', () => {
  let component: SupportDeskComponent;
  let fixture: ComponentFixture<SupportDeskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportDeskComponent ],
      imports: []
    }).compileComponents();

    fixture = TestBed.createComponent(SupportDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
