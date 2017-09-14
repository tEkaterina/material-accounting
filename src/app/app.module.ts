import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent, MenuComponent
  ],
  imports: [
    BrowserModule,
    //material design components
    BrowserAnimationsModule, MdButtonModule, MdCheckboxModule, MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
