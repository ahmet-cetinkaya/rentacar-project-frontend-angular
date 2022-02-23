import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core/core.module';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FilterAdditionalServicesPipe } from './pipes/filterAdditionalServices/filter-additional-services.pipe';
import { FilterBrandsPipe } from './pipes/filterBrands/filter-brands.pipe';
import { FilterCitiesPipe } from './pipes/filterCities/filter-cities.pipe';
import { FilterColorsPipe } from './pipes/filterColors/filter-colors.pipe';
import { FilterFuelsPipe } from './pipes/filterFuels/filter-fuels.pipe';
import { FilterModelListPipe } from './pipes/filterModels/filter-models-list.pipe';
import { FilterRentalBranchesPipe } from './pipes/filterRentalBranch/filter-rental-branches.pipe';
import { FilterTransmissionsPipe } from './pipes/filterTransmissions/filter-transmissions.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FilterAdditionalServicesPipe,
    FilterBrandsPipe,
    FilterCitiesPipe,
    FilterColorsPipe,
    FilterFuelsPipe,
    FilterModelListPipe,
    FilterRentalBranchesPipe,
    FilterTransmissionsPipe
  ],
  imports: [CommonModule, RouterModule, HttpClientModule, CoreModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    FilterAdditionalServicesPipe,
    FilterBrandsPipe,
    FilterCitiesPipe,
    FilterColorsPipe,
    FilterFuelsPipe,
    FilterModelListPipe,
    FilterRentalBranchesPipe,
    FilterTransmissionsPipe
  ]
})
export class SharedModule {}
