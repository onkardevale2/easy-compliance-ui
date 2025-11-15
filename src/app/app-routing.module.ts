import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowseJobsComponent } from './browse-jobs/browse-jobs.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { BrowseContextsComponent } from './browse-contexts/browse-contexts.component';
import { BrowseRulesComponent } from './browse-rules/browse-rules.component';

const routes: Routes = [

  {
    path: '', component: DashboardComponent
  },
  {
    path: 'browse-contexts', component: BrowseContextsComponent
  },
  {
    path: 'browse-jobs', component: BrowseJobsComponent
  },
  {
    path: 'create-job', component: CreateJobComponent
  },
  {
    path: 'subscriptions', component: SubscriptionComponent
  },
  {
    path: 'browse-rules', component: BrowseRulesComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }