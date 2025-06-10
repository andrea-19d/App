import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Module1SubscribeRoutingModule } from './module1-subscribe-routing-module';
import { ThingListComponent } from './components/thing-list/thing-list';

@NgModule({
  imports: [CommonModule, HttpClientModule, Module1SubscribeRoutingModule, ThingListComponent],
})
export class Module1Module {}
