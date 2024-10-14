import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterService } from './service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm!: FormGroup;
  isButtonDisabled = true;

  private formsBuilder = inject(NonNullableFormBuilder);
  private registerService = inject(RegisterService);
  private router = inject(Router);

  private _subs = new Subscription();

  ngOnInit(): void {
    this.registerForms();
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  registerForms() {
    this.registerForm = this.formsBuilder.group({
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
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const subs = this.registerService
        .postRegisterUser(this.registerForm.value)
        .subscribe(
          (response) => {
            console.log(response);
            this.registerForm.reset();
            this._goToLogin();
          },
          (error) => {
            console.error(error);
          }
        );

      this._subs.add(subs);
    }
  }

  private _goToLogin() {
    console.log('Navigating to login');
    this.router.navigate(['/login']);
  }
}
