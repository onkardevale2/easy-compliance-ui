import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-browse-jobs',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent{
  title = 'Browse Jobs';

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
