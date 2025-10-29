import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { JobExecutionWidgetComponent } from './component/widget/job-execution/job-execution.component';
import { BrowseJobsComponent } from './browse-jobs/browse-jobs.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStep, MatStepper, MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent, DashboardComponent, HeaderComponent, JobExecutionWidgetComponent,
    BrowseJobsComponent, CreateJobComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule,MatStepperModule, BrowserAnimationsModule,
    MatSnackBarModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
