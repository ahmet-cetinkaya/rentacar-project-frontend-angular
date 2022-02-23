import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'app/core/core.module';
import { RegisterCorporateCustomerFormComponent } from './../rentals/pages/register-customer-page/register-corporate-customer-form/register-corporate-customer-form.component';
import { RegisterCustomerPageComponent } from './../rentals/pages/register-customer-page/register-customer-page.component';
import { RegisterIndividualCustomerFormComponent } from './../rentals/pages/register-customer-page/register-individual-customer-form/register-individual-customer-form.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    AccountPageComponent,
    RegisterCustomerPageComponent,
    RegisterIndividualCustomerFormComponent,
    RegisterCorporateCustomerFormComponent
  ],
  imports: [CommonModule, AuthRoutingModule, CoreModule, FormsModule, ReactiveFormsModule]
})
export class AuthModule {}
