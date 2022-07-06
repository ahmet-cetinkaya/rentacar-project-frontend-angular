import { AdminModule } from './features/admin/admin.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './features/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { MsalRedirectComponent } from '@azure/msal-angular';
import { NgModule } from '@angular/core';
import { RentalsModule } from './features/rentals/rentals.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { authInterceptorProviders } from './core/interceptors/auth/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AuthModule,
    AdminModule,
    RentalsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['localhost:5278'],
        disallowedRoutes: []
      }
    })
  ],
  exports: [],
  providers: [CookieService, authInterceptorProviders],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule {}
