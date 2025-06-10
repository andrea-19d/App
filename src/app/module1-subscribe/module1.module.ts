import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1SubscribeRoutingModule } from './module1-subscribe-routing-module';
import { ThingListComponent } from './components/thing-list/thing-list';
import { AreaListComponent } from './components/area-list/area-list';
import { DashboardComponent } from './components/dashboard/dashboard';

@NgModule({
  imports: [
    CommonModule,
    Module1SubscribeRoutingModule,
    DashboardComponent,
    ThingListComponent,
    AreaListComponent,
  ],
})
export class Module1Module {}
