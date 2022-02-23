import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentalDashboardComponent } from './rental-dashboard.component';

describe('RentalDashboardComponent', () => {
  let component: RentalDashboardComponent;
  let fixture: ComponentFixture<RentalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalDashboardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
