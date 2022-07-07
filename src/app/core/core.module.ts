import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MsalBroadcastService,
  MsalModule,
  MsalService
} from '@azure/msal-angular';
import {
  msalGuardConfigFactory,
  msalInstanceFactory
} from './factories/microsoftAuth/msalFactories';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CoreReducers } from './store/core.reducer';
import { CoreRoutingModule } from './core-routing.module';
import { GoogleLoginButtonComponent } from './components/google-login-button/google-login-button.component';
import { HoverDirective } from './directives/hover.directive';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoginWithGoogleComponent } from './pages/login-with-google/login-with-google.component';
import { LoginWithMicrosoftComponent } from './pages/login-with-microsoft/login-with-microsoft.component';
import { MicrosoftLoginButtonComponent } from './components/microsoft-login-button/microsoft-login-button.component';
import { NgModule } from '@angular/core';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    PasswordInputComponent,
    LoadingSpinnerComponent,
    HoverDirective,
    LoginWithMicrosoftComponent,
    GoogleLoginButtonComponent,
    LoginWithGoogleComponent,
    MicrosoftLoginButtonComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(CoreReducers),
    MsalModule
  ],
  exports: [
    PasswordInputComponent,
    LoadingSpinnerComponent,
    HoverDirective,
    MicrosoftLoginButtonComponent,
    GoogleLoginButtonComponent
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: msalInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: msalGuardConfigFactory
    },
    MsalService,
    MsalBroadcastService
  ]
})
export class CoreModule {}
