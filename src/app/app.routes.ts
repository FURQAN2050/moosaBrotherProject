import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    loadChildren: './views/home/home.module#HomeModule'
  },
  {
    path:'login',
    component:LoginComponent
  },
  { 
    path: '**', 
    redirectTo: 'home/one'
  }
];

