import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuelsDashboardComponent } from './fuels-dashboard.component';

describe('FuelsDashboardComponent', () => {
  let component: FuelsDashboardComponent;
  let fixture: ComponentFixture<FuelsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuelsDashboardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
