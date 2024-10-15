import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedComponentsModule } from '../../../shared/components/module/shared-components.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, SharedComponentsModule],
})
export class LoginModule {}
