import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterCorporateCustomerFormComponent } from './register-corporate-customer-form.component';

describe('RegisterCorporateCustomerFormComponent', () => {
  let component: RegisterCorporateCustomerFormComponent;
  let fixture: ComponentFixture<RegisterCorporateCustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterCorporateCustomerFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCorporateCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
