import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Basic',
    loadComponent: () => import('./pages/basic-page/basic-page'),
  },
  {
    path: 'custom',
    title: 'Custom',
    loadComponent: () => import('./pages/custom-page/custom-page'),
  },
  {
    path: 'numbers',
    title: 'Numbers',
    loadComponent: () => import('./pages/numbers-page/numbers-page'),
  },
  {
    path: 'uncommon',
    title: 'Uncommon',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
