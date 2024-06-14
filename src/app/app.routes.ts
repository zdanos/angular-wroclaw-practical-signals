import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'signals-basics', loadComponent: () => import('./signals-basics/signals-basics.component') },
  { path: '', redirectTo: 'signals-basics', pathMatch: 'full' },
];
