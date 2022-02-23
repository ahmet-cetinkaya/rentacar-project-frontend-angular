import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarDamagesDashboardFormComponent } from './car-damages-dashboard-form.component';

describe('CarDamagesDashboardFormComponent', () => {
  let component: CarDamagesDashboardFormComponent;
  let fixture: ComponentFixture<CarDamagesDashboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarDamagesDashboardFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDamagesDashboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
