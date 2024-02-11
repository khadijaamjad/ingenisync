import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StickyWallComponent } from './sticky-wall/sticky-wall.component';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';
import { UpcomingTasksComponent } from './upcoming-tasks/upcoming-tasks.component';
import { TodaysTasksComponent } from './todays-tasks/todays-tasks.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'stickyWall', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'stickyWall', component: StickyWallComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'list', component: ListComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'upcoming', component: UpcomingTasksComponent },
      { path: 'today', component: TodaysTasksComponent }
    ]
  },
  { path: '**', component: WrongRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
