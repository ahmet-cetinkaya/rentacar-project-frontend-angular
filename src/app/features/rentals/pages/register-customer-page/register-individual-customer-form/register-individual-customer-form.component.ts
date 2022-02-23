import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Redirect } from 'app/core/models/redirect';
import { AuthService } from 'app/core/services/auth/auth.service';
import { CreateCustomerDto } from 'app/shared/dtos/createCustomerDto';
import { Customer } from 'app/shared/models/customer';
import { IndividualCustomer } from 'app/shared/models/individualCustomer';
import { CustomerService } from 'app/shared/services/customerService/customer.service';
import { IndividualCustomerService } from 'app/shared/services/individualService/individual-customer.service';

@Component({
  selector: 'app-register-individual-customer-form',
  templateUrl: './register-individual-customer-form.component.html',
  styleUrls: ['./register-individual-customer-form.component.scss']
})
export class RegisterIndividualCustomerFormComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private customerService: CustomerService,
    private individualCustomerService: IndividualCustomerService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalIdentity: ['', Validators.required]
    });
  }

  register() {
    if (!this.registerForm.valid) return;
    if (!this.authService.isAuthenticated) {
      this.userMustBeLogin();
      return;
    }

    const customerToAdd: CreateCustomerDto = {
      userId: this.authService.getTokenUserModel()?.id || 0
    };
    this.customerService
      .add(customerToAdd)
      .subscribe(customer => this.registerIndividualCustomer(customer));
  }

  registerIndividualCustomer(customer: Customer) {
    let individualCustomerToAdd: IndividualCustomer = {
      customerId: customer.id,
      ...this.registerForm.value
    };
    this.individualCustomerService.add(individualCustomerToAdd).subscribe(() => {
      this.activatedRoute.queryParams.subscribe(params => {
        const redirect: Redirect = JSON.parse(params['redirect']);
        this.router.navigate([redirect.url]);
      });
    });
  }

  userMustBeLogin() {
    this.activatedRoute.queryParams.subscribe(params => {
      const redirect: Redirect = JSON.parse(params['redirect']),
        newRedirect: Redirect = { url: 'register/customer', next: redirect };
      this.router.navigate(['/login'], {
        queryParams: {
          redirect: JSON.stringify(newRedirect)
        }
      });
    });
  }
}
