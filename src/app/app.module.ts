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
import { SubscriptionComponent } from './subscription/subscription.component';
import { CommonService } from './service/common.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowseContextsComponent } from './browse-contexts/browse-contexts.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent, DashboardComponent, HeaderComponent, JobExecutionWidgetComponent,
    BrowseJobsComponent, CreateJobComponent, SubscriptionComponent, BrowseContextsComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule,MatStepperModule, BrowserAnimationsModule,
    MatSnackBarModule , HttpClientModule, MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule
    
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
