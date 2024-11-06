import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  successMessage!: string | null;
  private _subs = new Subscription();

  private _activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
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
}
