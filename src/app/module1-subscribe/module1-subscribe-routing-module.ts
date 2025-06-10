import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThingListComponent } from './components/thing-list/thing-list';

const routes: Routes = [
  {path: '', component: ThingListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1SubscribeRoutingModule { }
