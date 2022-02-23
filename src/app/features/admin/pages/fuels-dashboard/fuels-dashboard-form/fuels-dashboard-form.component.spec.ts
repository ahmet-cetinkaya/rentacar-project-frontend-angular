import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuelsDashboardFormComponent } from './fuels-dashboard-form.component';

describe('FuelsDashboardFormComponent', () => {
  let component: FuelsDashboardFormComponent;
  let fixture: ComponentFixture<FuelsDashboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuelsDashboardFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelsDashboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
