import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorsDashboardFormComponent } from './colors-dashboard-form.component';

describe('ColorsDashboardFormComponent', () => {
  let component: ColorsDashboardFormComponent;
  let fixture: ComponentFixture<ColorsDashboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorsDashboardFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsDashboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
