import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarDamagesDashboardComponent } from './car-damages-dashboard.component';

describe('CarDamagesDashboardComponent', () => {
  let component: CarDamagesDashboardComponent;
  let fixture: ComponentFixture<CarDamagesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarDamagesDashboardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDamagesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
