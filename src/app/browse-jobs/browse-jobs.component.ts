import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { Context } from '../model/Context';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Rule } from '../model/Rule';
import { Job } from '../model/Job';

@Component({
  selector: 'app-browse-jobs',
  templateUrl: './browse-jobs.component.html',
  styleUrls: ['./browse-jobs.component.scss'],
})
export class BrowseJobsComponent {
  title = 'Browse Jobs';

  jobList!: Job[];

  displayedColumns: string[] = ['jobId','name', 'appId','buId','sbuId','frequency','expiry','automatic','readyForExecution','active'];
  dataSource = new MatTableDataSource<Job>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router, public commonsevice: CommonService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.commonsevice.getAllJobs().subscribe(result=>{
        this.jobList = result;
        this.dataSource.data = result;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
  }
}
