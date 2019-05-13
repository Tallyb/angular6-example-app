import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Lib1Module } from '@lib/lib1';
import { Test1Module } from 'test1';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Lib1Module,
    Test1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
