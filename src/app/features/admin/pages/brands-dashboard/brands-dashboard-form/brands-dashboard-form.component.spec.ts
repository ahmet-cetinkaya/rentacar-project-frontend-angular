import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandsDashboardFormComponent } from './brands-dashboard-form.component';

describe('BrandsDashboardFormComponent', () => {
  let component: BrandsDashboardFormComponent;
  let fixture: ComponentFixture<BrandsDashboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandsDashboardFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsDashboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
