import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentalBranchesDashboardFormComponent } from './rental-branches-dashboard-form.component';

describe('RentalBranchesDashboardFormComponent', () => {
  let component: RentalBranchesDashboardFormComponent;
  let fixture: ComponentFixture<RentalBranchesDashboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalBranchesDashboardFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalBranchesDashboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
