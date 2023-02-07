import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { ArchivedProjectsCardComponent } from './components/archived-projects-card/archived-projects-card/archived-projects-card.component';


@NgModule({

  declarations: [AppComponent, LoginPageComponent, RegisterPageComponent, MainPageComponent, NavbarComponent, SidebarComponent, DashboardComponent, FooterComponent, ArchivedProjectsCardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MainRoutingModule, HttpClientModule,],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],

  bootstrap: [AppComponent],
})
export class AppModule { }
