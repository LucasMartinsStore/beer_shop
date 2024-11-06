import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedComponentsModule } from '../../../shared/components/module/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
