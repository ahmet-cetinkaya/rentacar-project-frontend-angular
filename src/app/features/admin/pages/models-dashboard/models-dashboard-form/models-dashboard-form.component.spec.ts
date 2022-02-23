import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelsDashboardFormComponent } from './models-dashboard-form.component';

describe('ModelsDashboardFormComponent', () => {
  let component: ModelsDashboardFormComponent;
  let fixture: ComponentFixture<ModelsDashboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelsDashboardFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsDashboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
