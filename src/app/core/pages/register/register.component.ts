import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  private formsBuilder = inject(NonNullableFormBuilder);

  ngOnInit(): void {
    this.registerForms();
  }

  registerForms() {
    const subs = (this.registerForm = this.formsBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    }));
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
  }
}
