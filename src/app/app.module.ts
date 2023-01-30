import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { CardModule } from "primeng/card";
import { TimelineModule } from "primeng/timeline";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainRoutingModule } from './components/main-page/main-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ArchivedProjectsCardComponent } from './components/archived-projects-card/archived-projects-card/archived-projects-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, RegisterPageComponent, MainPageComponent, NavbarComponent, SidebarComponent, DashboardComponent, FooterComponent, HorizontalTimelineComponent, ArchivedProjectsCardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MainRoutingModule, TimelineModule, CardModule, NoopAnimationsModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
