import { SidebarModule } from 'primeng/sidebar';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  items: MenuItem[]; 
  @Input("visibleSideBar") visibleSidebar1;
  @Output("visibleSideBarChange") visibleSideBarChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.items = [
      {
      label: 'File',
      items: [
          {label: 'New', icon: 'pi pi-fw pi-plus'},
          {label: 'Download', icon: 'pi pi-fw pi-download'}
      ]
      },
      {
      label: 'Edit',
      items: [
          {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
      ]
      },
      {
      label: 'option3',
      items: [
          {label: 'New', icon: 'pi pi-fw pi-plus'},
          {label: 'Download', icon: 'pi pi-fw pi-download'}
      ]
      },
      {
      label: 'option4',
      items: [
          {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
      ]
      },
      {
      label: 'option5',
      items: [
          {label: 'New', icon: 'pi pi-fw pi-plus'},
          {label: 'Download', icon: 'pi pi-fw pi-download'}
      ]
      },
      {
      label: 'option6',
      items: [
          {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
      ]
      },
      {
      label: 'option7',
      items: [
          {label: 'New', icon: 'pi pi-fw pi-plus'},
          {label: 'Download', icon: 'pi pi-fw pi-download'}
      ]
      },
      {
      label: 'Checking',
      items: [
          {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
      ]
      },
      {
      label: 'option7',
      items: [
          {label: 'New', icon: 'pi pi-fw pi-plus'},
          {label: 'Download', icon: 'pi pi-fw pi-download'}
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
  closeSideBar(){
      
      this.visibleSidebar1 = false;
      this.visibleSideBarChange.emit(this.visibleSidebar1);
      console.log(this.visibleSidebar1);
  }
}
