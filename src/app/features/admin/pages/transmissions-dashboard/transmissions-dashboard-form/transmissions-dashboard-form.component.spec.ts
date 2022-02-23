import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransmissionsDashboardFormComponent } from './transmissions-dashboard-form.component';

describe('TransmissionsDashboardFormComponent', () => {
  let component: TransmissionsDashboardFormComponent;
  let fixture: ComponentFixture<TransmissionsDashboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransmissionsDashboardFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissionsDashboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
