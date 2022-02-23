import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { CoreRoutingModule } from './core-routing.module';
import { HoverDirective } from './directives/hover.directive';
import { CoreReducers } from './store/core.reducer';

@NgModule({
  declarations: [PasswordInputComponent, LoadingSpinnerComponent, HoverDirective],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(CoreReducers)
  ],
  exports: [PasswordInputComponent, LoadingSpinnerComponent, HoverDirective]
})
export class CoreModule {}
