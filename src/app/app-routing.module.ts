import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './core/pages/register/register.component';
import { LoginComponent } from './core/pages/login/login.component';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';

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
    path: '',
    component: LoginComponent,
    loadChildren: () =>
      import('./core/pages/login/module/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./core/pages/dashboard/module/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
