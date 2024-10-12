import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './core/pages/register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    loadChildren: () =>
      import('./core/pages/register/module/register.module').then(
        (m) => m.RegisterModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
