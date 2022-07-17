import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CmAngularOrgChartModule } from 'cm-angular-org-chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CmAngularOrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
