import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterIndividualCustomerFormComponent } from './register-individual-customer-form.component';

describe('RegisterIndividualCustomerFormComponent', () => {
  let component: RegisterIndividualCustomerFormComponent;
  let fixture: ComponentFixture<RegisterIndividualCustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterIndividualCustomerFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterIndividualCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
