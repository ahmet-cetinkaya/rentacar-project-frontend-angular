import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarsDashboardFormComponent } from './cars-dashboard-form.component';

describe('CarsDashboardFormComponent', () => {
  let component: CarsDashboardFormComponent;
  let fixture: ComponentFixture<CarsDashboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsDashboardFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsDashboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
