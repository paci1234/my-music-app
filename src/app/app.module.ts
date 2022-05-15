import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {FormsModule} from '@angular/forms';
import {SimplebarAngularModule} from 'simplebar-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    SimplebarAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
