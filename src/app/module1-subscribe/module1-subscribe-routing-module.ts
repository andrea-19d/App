import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThingListComponent } from './components/thing-list/thing-list';
import { AreaListComponent } from './components/area-list/area-list';
import { DashboardComponent } from './components/dashboard/dashboard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'things', pathMatch: 'full' },
      { path: 'things', component: ThingListComponent },
      { path: 'areas', component: AreaListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1SubscribeRoutingModule { }
