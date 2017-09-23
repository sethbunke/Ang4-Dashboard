import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ToasterModule} from 'angular2-toaster';
import {MdButtonModule, MdCheckboxModule, MdMenu, MdIcon} from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GistComponent } from './gist/gist.component';

@NgModule({
  declarations: [
    AppComponent,
    GistComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpModule,
    ToasterModule,
    MdButtonModule,
    MdCheckboxModule,
    MdMenu,
    MdIcon
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
