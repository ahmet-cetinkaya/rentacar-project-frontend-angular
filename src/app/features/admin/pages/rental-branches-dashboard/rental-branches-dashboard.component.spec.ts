import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentalBranchesDashboardComponent } from './rental-branches-dashboard.component';

describe('RentalBranchesDashboardComponent', () => {
  let component: RentalBranchesDashboardComponent;
  let fixture: ComponentFixture<RentalBranchesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalBranchesDashboardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalBranchesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
