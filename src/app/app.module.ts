import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {WebcamModule } from 'ngx-webcam'; 
import {ImageuploadService} from './imageupload.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     WebcamModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ImageuploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
