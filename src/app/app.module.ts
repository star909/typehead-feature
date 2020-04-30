import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { MainHeaderComponent } from './core/main-header/main-header.component';
import { RepoTypeheadComponent } from './module/repo-typehead/repo-typehead.component';
import { UserTypeheadComponent } from './module/user-typehead/user-typehead.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    RepoTypeheadComponent,
    UserTypeheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    TypeaheadModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
