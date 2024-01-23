import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then(r => r.routes),
  },
  { path: '**', component: NotFoundComponent },
];
