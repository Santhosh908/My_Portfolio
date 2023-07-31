import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProcompComponent } from './procomp/procomp.component';
import { AwardcompComponent } from './awardcomp/awardcomp.component';
import { CoursecompComponent } from './coursecomp/coursecomp.component';
import { AbtmecompComponent } from './abtmecomp/abtmecomp.component';
import { ContactcompComponent } from './contactcomp/contactcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProcompComponent,
    AwardcompComponent,
    CoursecompComponent,
    AbtmecompComponent,
    ContactcompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
