import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-float',
  templateUrl: './input-float.component.html',
  styleUrl: './input-float.component.scss',
})
export class InputFloatComponent {
  @Input() label = '';
}
