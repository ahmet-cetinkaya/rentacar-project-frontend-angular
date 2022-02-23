import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransmissionsDashboardComponent } from './transmissions-dashboard.component';

describe('TransmissionsDashboardComponent', () => {
  let component: TransmissionsDashboardComponent;
  let fixture: ComponentFixture<TransmissionsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransmissionsDashboardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissionsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
