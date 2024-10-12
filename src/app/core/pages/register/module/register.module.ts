import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFloatComponent } from '../../../shared/components/input-float/input-float.component';
import { RegisterComponent } from '../register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [RegisterComponent, InputFloatComponent],
  imports: [CommonModule, RegisterRoutingModule],
})
export class RegisterModule {}
