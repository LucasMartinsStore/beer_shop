import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './core/pages/register/register.component';
import { LoginComponent } from './core/pages/login/login.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    loadChildren: () =>
      import('./core/pages/register/module/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () =>
      import('./core/pages/login/module/login.module').then(
        (m) => m.LoginModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
