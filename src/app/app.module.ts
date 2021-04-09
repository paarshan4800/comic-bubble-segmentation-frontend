import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SampleImagesComponent } from './sample-images/sample-images.component';
import { OutputComponent } from './output/output.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { ServerDirectoryComponent } from './server-directory/server-directory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    SampleImagesComponent,
    OutputComponent,
    ServerDirectoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
