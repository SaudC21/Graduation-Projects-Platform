import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainRoutingModule } from './components/main-page/main-routing.module';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { ArchivedProjectsCardComponent } from './components/archived-projects-card/archived-projects-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsArchiveComponent } from './components/projects-archive/projects-archive.component';
import { AcademyCardComponent } from './components/academy-card/academy-card.component';
import { AcademyComponent } from './components/academy/academy.component';
import { GuidanceSessionComponent } from './components/guidance-session/guidance-session.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { ProjectRequirementsComponent } from './components/project-requirements/project-requirements.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { NotificationComponent } from './components/notification/notification.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageComponent } from './components/message/message.component';
import { SupportComponent } from './components/support/support.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { GradesComponent } from './components/grades/grades.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MainPageComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    FooterComponent,
    ArchivedProjectsCardComponent,
    ProjectsArchiveComponent,
    AcademyCardComponent,
    AcademyComponent,
    GuidanceSessionComponent,
    ProfileComponent,
    SubmissionComponent,
    ProjectRequirementsComponent,
    LessonComponent,
    NotificationListComponent,
    NotificationComponent,
    MessageListComponent,
    MessageComponent,
    SupportComponent,
    ViewProjectComponent,
    GradesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MainRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
