import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFloatComponent } from '../input-float/input-float.component';

@NgModule({
  declarations: [InputFloatComponent],
  imports: [CommonModule],
  exports: [InputFloatComponent],
})
export class SharedComponentsModule {}
