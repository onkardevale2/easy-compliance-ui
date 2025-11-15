import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { Context } from '../model/Context';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-browse-context',
  templateUrl: './browse-contexts.component.html',
  styleUrls: ['./browse-contexts.component.scss'],
})
export class BrowseContextsComponent {
  title = 'Browse Contexts';

  contextList!: Context[];

  displayedColumns: string[] = ['contextId','name', 'appId','buId','sbuId','netsRole','country', 'retentionPeriod'];
  dataSource = new MatTableDataSource<Context>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router, public commonsevice: CommonService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.commonsevice.getAllContexts().subscribe(result=>{
        this.contextList = result;
        this.dataSource.data = result;
        this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        console.log(this.contextList);
    });
  }
}
