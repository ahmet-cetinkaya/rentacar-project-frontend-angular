import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Redirect } from 'app/core/models/redirect';
import { AuthService } from 'app/core/services/auth/auth.service';
import { CreateCorporateCustomerDto } from 'app/shared/dtos/createCorporateCustomerDto';
import { CreateCustomerDto } from 'app/shared/dtos/createCustomerDto';
import { Customer } from 'app/shared/models/customer';
import { CorporateCustomerService } from 'app/shared/services/corporateCustomer/corporate-customer.service';
import { CustomerService } from 'app/shared/services/customerService/customer.service';

@Component({
  selector: 'app-register-corporate-customer-form',
  templateUrl: './register-corporate-customer-form.component.html',
  styleUrls: ['./register-corporate-customer-form.component.scss']
})
export class RegisterCorporateCustomerFormComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private customerService: CustomerService,
    private corporateCustomerService: CorporateCustomerService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      taxNo: ['', Validators.required]
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
      .subscribe(customer => this.registerCorporateCustomer(customer));
  }

  registerCorporateCustomer(customer: Customer) {
    let corporateCustomerToAdd: CreateCorporateCustomerDto = {
      customerId: customer.id,
      ...this.registerForm.value
    };
    this.corporateCustomerService.add(corporateCustomerToAdd).subscribe(() => {
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
