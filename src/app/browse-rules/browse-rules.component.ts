import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { Context } from '../model/Context';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Rule } from '../model/Rule';

@Component({
  selector: 'app-browse-rules',
  templateUrl: './browse-rules.component.html',
  styleUrls: ['./browse-rules.component.scss'],
})
export class BrowseRulesComponent {
  title = 'Browse Rules';

  ruleList!: Rule[];

  displayedColumns: string[] = ['ruleId','name', 'appId','buId','sbuId','targetDataObject','ruleDocLink'];
  dataSource = new MatTableDataSource<Rule>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router, public commonsevice: CommonService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.commonsevice.getAllRules().subscribe(result=>{
        this.ruleList = result;
        this.dataSource.data = result;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.ruleList);
    });
  }
}
