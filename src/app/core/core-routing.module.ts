import { RouterModule, Routes } from '@angular/router';

import { LoginWithMicrosoftComponent } from './pages/login-with-microsoft/login-with-microsoft.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: 'login-with-microsoft', component: LoginWithMicrosoftComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
