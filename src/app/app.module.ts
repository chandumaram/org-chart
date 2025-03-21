import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmAngularOrgChartComponent } from 'cm-angular-org-chart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CmAngularOrgChartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
