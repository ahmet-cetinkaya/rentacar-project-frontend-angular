import { RouterModule, Routes } from '@angular/router';

import { LoginWithGoogleComponent } from './pages/login-with-google/login-with-google.component';
import { LoginWithMicrosoftComponent } from './pages/login-with-microsoft/login-with-microsoft.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'login-with-microsoft', component: LoginWithMicrosoftComponent },
  { path: 'login-with-google', component: LoginWithGoogleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
