import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StickyWallComponent } from './sticky-wall/sticky-wall.component';
import { StickyWallCardComponent } from './sticky-wall-card/sticky-wall-card.component';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';
import { ListItemModalComponent } from './list-item-modal/list-item-modal.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarUtilsComponent } from './calendar-utils/calendar-utils.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';
import { HomeComponent } from './home/home.component';
import { UpcomingTasksComponent } from './upcoming-tasks/upcoming-tasks.component';
import { TodaysTasksComponent } from './todays-tasks/todays-tasks.component';

import { ThemeService } from './services/theme-service/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    StickyWallComponent,
    StickyWallCardComponent,
    ListsComponent,
    ListComponent,
    ListItemModalComponent,
    CalendarComponent,
    CalendarUtilsComponent,
    WrongRouteComponent,
    HomeComponent,
    UpcomingTasksComponent,
    TodaysTasksComponent
  ],
  imports: [
    RouterLink,
    FormsModule,
    RouterOutlet,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    RouterLinkActive,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
