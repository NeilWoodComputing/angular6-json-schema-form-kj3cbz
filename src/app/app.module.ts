import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Bootstrap4FrameworkModule } from 'angular6-json-schema-form';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, Bootstrap4FrameworkModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
