import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFloatComponent } from '../../../shared/components/input-float/input-float.component';
import { RegisterComponent } from '../register.component';
import { RegisterRoutingModule } from './register-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../../../shared/components/module/shared-components.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ],
})
export class RegisterModule {}
