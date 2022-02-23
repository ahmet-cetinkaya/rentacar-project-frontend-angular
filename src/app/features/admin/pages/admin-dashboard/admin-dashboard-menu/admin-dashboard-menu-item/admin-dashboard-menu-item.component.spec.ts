import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDashboardMenuItemComponent } from './admin-dashboard-menu-item.component';

describe('AdminDashboardMenuItemComponent', () => {
  let component: AdminDashboardMenuItemComponent;
  let fixture: ComponentFixture<AdminDashboardMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDashboardMenuItemComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
