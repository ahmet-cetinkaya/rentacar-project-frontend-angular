import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'app/core/core.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { RegisterCorporateCustomerFormComponent } from './../rentals/pages/register-customer-page/register-corporate-customer-form/register-corporate-customer-form.component';
import { RegisterCustomerPageComponent } from './../rentals/pages/register-customer-page/register-customer-page.component';
import { RegisterIndividualCustomerFormComponent } from './../rentals/pages/register-customer-page/register-individual-customer-form/register-individual-customer-form.component';
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
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule
  ]
})
export class AuthModule {}
