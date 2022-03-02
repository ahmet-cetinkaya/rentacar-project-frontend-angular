import { RouterModule, Routes } from '@angular/router';

import { AdditionalServicesDashboardComponent } from './pages/additional-service-dashboard/additional-service-dashboard.component';
import { AdditionalServicesDashboardFormComponent } from './pages/additional-service-dashboard/additional-service-dashboard-form/additional-service-dashboard-form.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { BrandsDashboardComponent } from './pages/brands-dashboard/brands-dashboard.component';
import { BrandsDashboardFormComponent } from './pages/brands-dashboard/brands-dashboard-form/brands-dashboard-form.component';
import { CarDamagesDashboardComponent } from './pages/car-damages-dashboard/car-damages-dashboard.component';
import { CarDamagesDashboardFormComponent } from './pages/car-damages-dashboard/car-damages-dashboard-form/car-damages-dashboard-form.component';
import { CarsDashboardComponent } from './pages/cars-dashboard/cars-dashboard.component';
import { CarsDashboardFormComponent } from './pages/cars-dashboard/cars-dashboard-form/cars-dashboard-form.component';
import { ClaimGuard } from './../../core/guards/claim/claim.guard';
import { ColorsDashboardComponent } from './pages/colors-dashboard/colors-dashboard.component';
import { ColorsDashboardFormComponent } from './pages/colors-dashboard/colors-dashboard-form/colors-dashboard-form.component';
import { FuelsDashboardComponent } from './pages/fuels-dashboard/fuels-dashboard.component';
import { FuelsDashboardFormComponent } from './pages/fuels-dashboard/fuels-dashboard-form/fuels-dashboard-form.component';
import { LoginGuard } from './../../core/guards/login/login.guard';
import { LoginPageComponent } from '../auth/pages/login-page/login-page.component';
import { ModelsDashboardComponent } from './pages/models-dashboard/models-dashboard.component';
import { ModelsDashboardFormComponent } from './pages/models-dashboard/models-dashboard-form/models-dashboard-form.component';
import { NgModule } from '@angular/core';
import { RentalBranchesDashboardComponent } from './pages/rental-branches-dashboard/rental-branches-dashboard.component';
import { RentalBranchesDashboardFormComponent } from './pages/rental-branches-dashboard/rental-branches-dashboard-form/rental-branches-dashboard-form.component';
import { RentalDashboardComponent } from './pages/rental-dashboard/rental-dashboard.component';
import { TransmissionsDashboardComponent } from './pages/transmissions-dashboard/transmissions-dashboard.component';
import { TransmissionsDashboardFormComponent } from './pages/transmissions-dashboard/transmissions-dashboard-form/transmissions-dashboard-form.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [LoginGuard, ClaimGuard],
    data: { requiredClaims: ['admin'] },
    children: [
      {
        path: 'additional-services',
        component: AdditionalServicesDashboardComponent
      },
      ...['additional-services/add', 'additional-services/edit/:id'].map(path => ({
        path,
        component: AdditionalServicesDashboardFormComponent
      })),
      {
        path: 'brands',
        component: BrandsDashboardComponent
      },
      ...['brands/add', 'brands/edit/:id'].map(path => ({
        path,
        component: BrandsDashboardFormComponent
      })),
      {
        path: 'car-damages',
        component: CarDamagesDashboardComponent
      },
      ...['car-damages/add', 'car-damages/edit/:id'].map(path => ({
        path,
        component: CarDamagesDashboardFormComponent
      })),
      {
        path: 'cars',
        component: CarsDashboardComponent
      },
      ...['cars/add', 'cars/edit/:id'].map(path => ({
        path,
        component: CarsDashboardFormComponent
      })),
      {
        path: 'colors',
        component: ColorsDashboardComponent
      },
      ...['colors/add', 'colors/edit/:id'].map(path => ({
        path,
        component: ColorsDashboardFormComponent
      })),
      {
        path: 'fuels',
        component: FuelsDashboardComponent
      },
      ...['fuels/add', 'fuels/edit/:id'].map(path => ({
        path,
        component: FuelsDashboardFormComponent
      })),
      {
        path: 'models',
        component: ModelsDashboardComponent
      },
      ...['models/add', 'models/edit/:id'].map(path => ({
        path,
        component: ModelsDashboardFormComponent
      })),
      {
        path: 'rentals',
        component: RentalDashboardComponent
      },
      ...['rentals/edit/:id'].map(path => ({
        path,
        component: RentalBranchesDashboardFormComponent
      })),
      {
        path: 'rental-branches',
        component: RentalBranchesDashboardComponent
      },
      ...['rental-branches/add', 'rental-branches/edit/:id'].map(path => ({
        path,
        component: RentalBranchesDashboardFormComponent
      })),
      {
        path: 'transmissions',
        component: TransmissionsDashboardComponent
      },
      ...['transmissions/add', 'transmissions/edit/:id'].map(path => ({
        path,
        component: TransmissionsDashboardFormComponent
      }))
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
