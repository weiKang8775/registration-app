import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutesModule } from './app-routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ScheduleComponent } from './scheduler/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SchedulerComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
