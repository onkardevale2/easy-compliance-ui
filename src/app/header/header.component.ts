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
  @Input() openSubMenu: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.open = this.openSubMenu;
  }

  openCloseSideBar(){
    const sidebarElement = document.getElementById('sidebar') as HTMLElement;
    const contentElement = document.getElementById('content') as HTMLElement;
    if(!this.open){
      this.open = true;
      sidebarElement.style.display = 'block';
      contentElement.style.marginLeft = '175px'
    } else {
      this.open = false;
      sidebarElement.style.display = 'none';
      contentElement.style.marginLeft = '0px'
    }
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
