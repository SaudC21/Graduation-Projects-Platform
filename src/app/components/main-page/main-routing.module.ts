import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { MainPageComponent } from './main-page.component';

// Add components here to enable main routing
const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'test',
        component: LoginPageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
