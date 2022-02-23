import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDashboardMenuComponent } from './admin-dashboard-menu.component';

describe('AdminDashboardMenuComponent', () => {
  let component: AdminDashboardMenuComponent;
  let fixture: ComponentFixture<AdminDashboardMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDashboardMenuComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
