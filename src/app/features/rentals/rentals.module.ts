import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'app/core/core.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { SharedModule } from './../../shared/shared.module';
import { BrandFilterBarComponent } from './components/brand-filter-bar/brand-filter-bar.component';
import { ModelCardComponent } from './components/model-card/model-card.component';
import { ModelFilterMenuComponent } from './components/model-filter-menu/model-filter-menu.component';
import { ModelListComponent } from './components/models-list/models-list.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { OverlayComponent } from './pages/homepage/overlay/overlay.component';
import { ModelPageComponent } from './pages/model-page/model-page.component';
import { ModelsPageComponent } from './pages/models-page/models-page.component';
import { RentalsRoutingModule } from './rentals-routing.module';

@NgModule({
  declarations: [
    HomepageComponent,
    OverlayComponent,
    BrandFilterBarComponent,
    ModelListComponent,
    ModelCardComponent,
    ModelsPageComponent,
    ModelFilterMenuComponent,
    ModelPageComponent
  ],
  imports: [
    CommonModule,
    RentalsRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule
  ],
  exports: []
})
export class RentalsModule {}
