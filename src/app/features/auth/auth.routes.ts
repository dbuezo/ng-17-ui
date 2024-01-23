import { Routes } from '@angular/router';
import { LoginComponent } from './pages';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
];
