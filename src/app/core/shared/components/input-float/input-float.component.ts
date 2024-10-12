import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-float',
  templateUrl: './input-float.component.html',
  styleUrl: './input-float.component.scss',
})
export class InputFloatComponent implements OnInit {
  @Input() label = '';
  @Input() inputId = '';

  inputType = '';

  ngOnInit(): void {
    this.changedType();
  }

  changedType() {
    const typeMap: { [key: string]: string } = {
      senha: 'password',
      email: 'email',
    };

    this.inputType = typeMap[this.label.toLocaleLowerCase()] || 'text';
  }
}
