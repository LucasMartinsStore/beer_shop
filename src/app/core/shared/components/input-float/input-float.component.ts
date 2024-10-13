import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'app-input-float',
  templateUrl: './input-float.component.html',
  styleUrls: ['./input-float.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFloatComponent),
      multi: true,
    },
  ],
})
export class InputFloatComponent implements OnInit, ControlValueAccessor {
  @Input() label = '';
  @Input() inputId = '';

  inputType = '';

  protected value: string = '';
  onchanged: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  ngOnInit(): void {
    this.changedType();
    this.setInputValue(this.value);
  }

  changedType() {
    const typeMap: { [key: string]: string } = {
      senha: 'password',
      email: 'email',
    };
    this.inputType = typeMap[this.label.toLocaleLowerCase()] || 'text';
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onchanged = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setInputValue(value: string) {
    this.writeValue(value);
    this.onchanged(value);
    this.onTouched();
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.setInputValue(input.value);
  }
}
