import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { MainPageComponent } from './main-page.component';
import { ProjectsArchiveComponent } from '../projects-archive/projects-archive.component';
import { AcademyComponent } from '../academy/academy.component';
import { GuidanceSessionComponent } from '../guidance-session/guidance-session.component';
import { ProfileComponent } from '../profile/profile.component';
import { SubmissionComponent } from '../submission/submission.component';
import { ProjectRequirementsComponent } from '../project-requirements/project-requirements.component';
import { LessonComponent } from '../lesson/lesson.component';
import { NotificationListComponent } from '../notification-list/notification-list.component';
import { NotificationComponent } from '../notification/notification.component';
import { MessageListComponent } from '../message-list/message-list.component';
import { MessageComponent } from '../message/message.component';
import { SupportComponent } from '../support/support.component';

// Add components here to enable main routing
const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'test',
        component: LoginPageComponent,
      },
      {
        path: 'archive',
        component: ProjectsArchiveComponent,
      },
      {
        path: 'academy',
        component: AcademyComponent,
      },
      {
        path: 'guide',
        component: GuidanceSessionComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'submission',
        component: SubmissionComponent,
      },
      {
        path: 'project-requirments',
        component: ProjectRequirementsComponent,
      },
      {
        path: 'lesson',
        component: LessonComponent,
      },
      {
        path: 'notifications-list',
        component: NotificationListComponent
      },
      {
        path: 'notification',
        component: NotificationComponent
      },
      {
        path: 'messages-list',
        component: MessageListComponent
      },
      {
        path: 'message',
        component: MessageComponent
      },
      {
        path: 'support',
        component: SupportComponent,
      }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
