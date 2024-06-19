import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'computed-signals', loadComponent: () => import('./computed-signals/computed-signals.component') },
  { path: 'effects', loadComponent: () => import('./effects/effects.component') },
  { path: 'models', loadComponent: () => import('./models/models.component') },
  { path: 'outputs', loadComponent: () => import('./outputs/outputs.component') },
  { path: 'signal-inputs', loadComponent: () => import('./signal-inputs/signal-inputs.component') },
  { path: 'signals-basics', loadComponent: () => import('./signals-basics/signals-basics.component') },
  { path: '', redirectTo: 'signals-basics', pathMatch: 'full' },
];
