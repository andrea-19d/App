import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1SubscribeRoutingModule } from './module1-subscribe-routing-module';
import { ThingListComponent } from './components/thing-list/thing-list';


@NgModule({
  imports: [
    CommonModule,
    Module1SubscribeRoutingModule,
    ThingListComponent
  ]
})
export class Module1SubscribeModule { }
