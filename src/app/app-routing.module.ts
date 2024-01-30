import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StickyWallComponent } from './sticky-wall/sticky-wall.component';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'stickyWall', component: StickyWallComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'list', component: ListComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
