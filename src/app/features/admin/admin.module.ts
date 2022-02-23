import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'app/core/core.module';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SharedModule } from './../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdditionalServicesDashboardFormComponent } from './pages/additional-service-dashboard/additional-service-dashboard-form/additional-service-dashboard-form.component';
import { AdditionalServicesDashboardComponent } from './pages/additional-service-dashboard/additional-service-dashboard.component';
import { AdminDashboardMenuItemComponent } from './pages/admin-dashboard/admin-dashboard-menu/admin-dashboard-menu-item/admin-dashboard-menu-item.component';
import { AdminDashboardMenuComponent } from './pages/admin-dashboard/admin-dashboard-menu/admin-dashboard-menu.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { BrandsDashboardFormComponent } from './pages/brands-dashboard/brands-dashboard-form/brands-dashboard-form.component';
import { BrandsDashboardComponent } from './pages/brands-dashboard/brands-dashboard.component';
import { CarDamagesDashboardFormComponent } from './pages/car-damages-dashboard/car-damages-dashboard-form/car-damages-dashboard-form.component';
import { CarDamagesDashboardComponent } from './pages/car-damages-dashboard/car-damages-dashboard.component';
import { CarsDashboardFormComponent } from './pages/cars-dashboard/cars-dashboard-form/cars-dashboard-form.component';
import { CarsDashboardComponent } from './pages/cars-dashboard/cars-dashboard.component';
import { ColorsDashboardFormComponent } from './pages/colors-dashboard/colors-dashboard-form/colors-dashboard-form.component';
import { ColorsDashboardComponent } from './pages/colors-dashboard/colors-dashboard.component';
import { FuelsDashboardFormComponent } from './pages/fuels-dashboard/fuels-dashboard-form/fuels-dashboard-form.component';
import { FuelsDashboardComponent } from './pages/fuels-dashboard/fuels-dashboard.component';
import { ModelsDashboardFormComponent } from './pages/models-dashboard/models-dashboard-form/models-dashboard-form.component';
import { ModelsDashboardComponent } from './pages/models-dashboard/models-dashboard.component';
import { RentalBranchesDashboardFormComponent } from './pages/rental-branches-dashboard/rental-branches-dashboard-form/rental-branches-dashboard-form.component';
import { RentalBranchesDashboardComponent } from './pages/rental-branches-dashboard/rental-branches-dashboard.component';
import { RentalDashboardComponent } from './pages/rental-dashboard/rental-dashboard.component';
import { TransmissionsDashboardFormComponent } from './pages/transmissions-dashboard/transmissions-dashboard-form/transmissions-dashboard-form.component';
import { TransmissionsDashboardComponent } from './pages/transmissions-dashboard/transmissions-dashboard.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminDashboardMenuComponent,
    AdminDashboardMenuItemComponent,
    ModelsDashboardComponent,
    ModelsDashboardFormComponent,
    BrandsDashboardComponent,
    BrandsDashboardFormComponent,
    ColorsDashboardComponent,
    ColorsDashboardFormComponent,
    FuelsDashboardComponent,
    FuelsDashboardFormComponent,
    TransmissionsDashboardComponent,
    TransmissionsDashboardFormComponent,
    CarsDashboardComponent,
    CarsDashboardFormComponent,
    AdditionalServicesDashboardComponent,
    AdditionalServicesDashboardFormComponent,
    CarDamagesDashboardComponent,
    CarDamagesDashboardFormComponent,
    RentalBranchesDashboardComponent,
    RentalBranchesDashboardFormComponent,
    RentalDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    CheckboxModule,
    InputSwitchModule
  ]
})
export class AdminModule {}
