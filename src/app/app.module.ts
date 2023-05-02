import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialExampleModule } from '../material.module';
import { SidenavOverviewExample } from './sidenav-overview-example';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SidenavOverviewExample],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule
  ],
  bootstrap: [SidenavOverviewExample],
})
export class AppModule {}
