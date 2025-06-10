import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'module1',
    loadChildren: () => import('./module1-subscribe/module1.module').then(m => m.Module1Module),
  },
  { path: '', redirectTo: 'module1', pathMatch: 'full' },
];
