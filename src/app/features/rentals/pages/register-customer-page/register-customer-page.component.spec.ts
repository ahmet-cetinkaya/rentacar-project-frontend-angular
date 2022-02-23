import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterCustomerPageComponent } from './register-customer-page.component';

describe('RegisterCustomerPageComponent', () => {
  let component: RegisterCustomerPageComponent;
  let fixture: ComponentFixture<RegisterCustomerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterCustomerPageComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
