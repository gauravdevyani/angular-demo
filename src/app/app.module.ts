import { NgModule } from '@angular/core';
import { BrowserModule, makeStateKey } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
// import { MatPaginator } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogCompComponent } from './dialog-comp/dialog-comp.component';
import {  MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    DialogCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatTabsModule,
    // MatPaginator,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
