import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Header';
  open: boolean = false;

  @Input() selectedPage: string = 'home';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openCloseMenu(){
    if(!this.open){
      this.open = true;
    } else {
      this.open = false;
    }
  }

  routeToPage(page:any){
    this.router.navigate(page);
  }
}
