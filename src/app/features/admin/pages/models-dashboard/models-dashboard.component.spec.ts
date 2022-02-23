import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelsDashboardComponent } from './models-dashboard.component';

describe('ModelsDashboardComponent', () => {
  let component: ModelsDashboardComponent;
  let fixture: ComponentFixture<ModelsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelsDashboardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
