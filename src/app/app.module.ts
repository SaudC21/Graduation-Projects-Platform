import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { HorizontalTimelineComponent } from './components/horizontal-timeline/horizontal-timeline.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, RegisterPageComponent, MainPageComponent, NavbarComponent, SidebarComponent, DashboardComponent, FooterComponent, HorizontalTimelineComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MainRoutingModule, TimelineModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
