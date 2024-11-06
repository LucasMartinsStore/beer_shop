import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from './service/login.service';
import { Login } from './interface/login.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  successMessage!: string | null;
  errorMessage!: string | null;
  email: string = '';
  password: string = '';
  loginForm!: FormGroup;

  private _subs = new Subscription();

  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  private _loginService = inject(LoginService);
  private _fb = inject(FormBuilder);

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.messageSucessRegister();
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  messageSucessRegister(): void {
    const subs = this._activatedRoute.paramMap.subscribe(() => {
      const state = window.history.state;
      if (state && state.message) {
        this.successMessage = state.message;
      }
    });
    this._subs.add(subs);
  }
  goToRegister() {
    this._router.navigate(['/register']);
  }

  login() {
    const { email, password } = this.loginForm.value;
    this._loginService.login(email, password).subscribe(
      (user: Login) => {
        console.log('Login successful', user);
        this._router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Usuário invalido ou senha incorreta';
      }
    );
  }
}
