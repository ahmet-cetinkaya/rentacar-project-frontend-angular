import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdditionalServicesDashboardFormComponent } from './additional-service-dashboard-form.component';

describe('AdditionalServicesDashboardFormComponent', () => {
  let component: AdditionalServicesDashboardFormComponent;
  let fixture: ComponentFixture<AdditionalServicesDashboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdditionalServicesDashboardFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalServicesDashboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
