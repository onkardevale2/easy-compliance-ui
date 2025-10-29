import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowseJobsComponent } from './browse-jobs/browse-jobs.component';
import { CreateJobComponent } from './create-job/create-job.component';

const routes: Routes = [

  {
    path: '', component: DashboardComponent
  },
  {
    path: 'browse-jobs', component: BrowseJobsComponent
  },
  {
    path: 'create-job', component: CreateJobComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }