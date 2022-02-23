import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdditionalServicesDashboardComponent } from './additional-service-dashboard.component';

describe('AdditionalServicesDashboardComponent', () => {
  let component: AdditionalServicesDashboardComponent;
  let fixture: ComponentFixture<AdditionalServicesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdditionalServicesDashboardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalServicesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
