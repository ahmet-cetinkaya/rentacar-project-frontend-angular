import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ModelPageComponent } from './pages/model-page/model-page.component';
import { ModelsPageComponent } from './pages/models-page/models-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'models', component: ModelsPageComponent },
  { path: 'model/:id', component: ModelPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalsRoutingModule {}
