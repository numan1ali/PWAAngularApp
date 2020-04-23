import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  sideMenuItems: MenuItem[];
  
  visibleSidebar1;
  constructor(private router: Router) { }


  ngOnInit() {
    this.items = [
        {
          label: 'Home',
          command: (event) => this.router.navigate(['/home'])
        },
        {
            label: 'Products',
            command: (event) => this.navigateToFollowers()
        },
        {
            label: 'Posts',
            command: (event) => this.navigateToPosts()
        }
    ];
    this.sideMenuItems = [
      {
      label: 'Mobile Phones',
      items: [
          {
            label: 'Brand1',
            command: (event) => {
              this.router.navigate(['/home']);
              this.visibleSidebar1 = false;
            }
          },
          {
            label: 'Brand2'
          },
          {
            label: 'Brand1',
            command: (event) => {
              this.router.navigate(['/home']);
              this.visibleSidebar1 = false;
            }
          },
          {
            label: 'Apple Iphone',
            command: (event) => {
              this.router.navigate(['/home']);
              this.visibleSidebar1 = false;
            }
          },
          {
            label: 'Samsung',
            command: (event) => {
              this.router.navigate(['/product']);
              this.visibleSidebar1 = false;
            }
          }
      ]
      },
      {
      label: 'Cameras',
      items: [
          {
            label: 'Nikon'
          },
          {
            label: 'Sony'
          }
      ]
      },
      {
      label: 'Price ranges',
      items: [
          {
            label: 'More than 20000'
          },
          {
            label: 'More than 30000'
          }
      ]
      },
      {
      label: 'Checking',
      items: [
          {label: 'Add User', icon: 'pi pi-fw pi-user-plus'}, 
          {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
      ]
      }
    ];
  }
  navigateToFollowers() {
    this.router.navigate(['/product'])
    // this.router.navigate(['/product'], {queryParams: { page: 1, order: 'newest'}})
  }
  navigateToPosts() {
    this.router.navigate(['/posts'])
  }

  

}
