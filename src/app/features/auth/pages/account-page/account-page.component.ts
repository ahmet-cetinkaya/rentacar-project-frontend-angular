import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserForUpdateFromAuthDto } from 'app/core/models/user';
import { AuthService } from 'app/core/services/auth/auth.service';
import { CorporateCustomer } from 'app/shared/models/corporateCustomer';
import { Customer } from 'app/shared/models/customer';
import { FindeksCreditRate } from 'app/shared/models/findeksCreditRate';
import { IndividualCustomer } from 'app/shared/models/individualCustomer';
import { CorporateCustomerService } from 'app/shared/services/corporateCustomer/corporate-customer.service';
import { CustomerService } from 'app/shared/services/customerService/customer.service';
import { FindeksCreditRateService } from 'app/shared/services/findeksCreditRateService/findeks-credit-rate.service';
import { IndividualCustomerService } from 'app/shared/services/individualService/individual-customer.service';
import { UserService } from 'app/shared/services/userService/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  accountForm!: FormGroup;
  user!: User;
  findeksCreditRate!: FindeksCreditRate;
  customer!: Customer;
  individualCustomer!: IndividualCustomer;
  corporateCustomer!: CorporateCustomer;
  currentPasswordHidden: boolean = true;
  newPasswordHidden: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private customerService: CustomerService,
    private individualCustomerService: IndividualCustomerService,
    private corporateCustomerService: CorporateCustomerService,
    private findeksCreditRateService: FindeksCreditRateService,
    private toastrService: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getFromAuth().subscribe(user => {
      this.user = user;

      this.getCustomerByUser();
      this.createAccountFrom();
    });
  }

  createAccountFrom() {
    this.accountForm = this.formBuilder.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      password: ['', Validators.required],
      newPassword: ['']
    });
  }

  getCustomerByUser() {
    this.customerService.getByAuth().subscribe(customer => {
      this.getIndividualCustomer(customer);
      this.getFindeksCreditRate(customer);
    });
  }

  getIndividualCustomer(customer: Customer) {
    this.individualCustomerService.getByCustomerId(customer.id).subscribe({
      next: individualCustomer => {
        this.individualCustomer = individualCustomer;
      },
      error: () => this.getCorporateCustomer(customer)
    });
  }

  getCorporateCustomer(customer: Customer) {
    this.corporateCustomerService.getByCustomerId(customer.id).subscribe({
      next: corporateCustomer => {
        this.corporateCustomer = corporateCustomer;
      }
    });
  }

  getFindeksCreditRate(customer: Customer) {
    this.findeksCreditRateService.getByCustomerId(customer.id).subscribe(response => {
      this.findeksCreditRate = response;
    });
  }

  updateAccount() {
    if (!this.accountForm.valid) return;

    let userForUpdateFromAuthDto: UserForUpdateFromAuthDto = {
      ...this.accountForm.value
    };

    this.userService.updateFromAuth(userForUpdateFromAuthDto).subscribe(response => {
      localStorage.setItem('token', response.accessToken.token);
      this.authService.refreshTokenUserModel();
      this.toastrService.success('Account updated successfully');
    });
  }

  updateFindeksCreditScore() {
    const identityNumber: string =
      this.individualCustomer?.nationalIdentity || this.corporateCustomer.taxNo;
    this.findeksCreditRateService
      .updateByAuthFromService(identityNumber)
      .subscribe(findeksCreditRate => {
        this.findeksCreditRate = findeksCreditRate;
        this.toastrService.success('Findeks credit score updated successfully');
      });
  }
}
