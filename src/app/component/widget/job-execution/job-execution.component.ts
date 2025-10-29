import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-job-execution',
  templateUrl: './job-execution.component.html',
  styleUrls: ['./job-execution.component.scss']
})
export class JobExecutionWidgetComponent {
  title = 'Home';

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
