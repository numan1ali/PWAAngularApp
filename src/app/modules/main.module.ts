import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { MainContentComponent } from '../components/main-content/main-content.component';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from '../components/home/home.component';
import { ProductComponent } from '../components/product/product.component';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';




@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    HeaderComponent,
    SideMenuComponent,
    MainContentComponent,
  ],
  imports: [
    CommonModule,
    MenubarModule,
    MenuModule,
    SidebarModule,
    ButtonModule,
    CarouselModule,
    DataViewModule
  ],
  exports: [
    HomeComponent,
    ProductComponent,
    HeaderComponent,
    SideMenuComponent,
    MainContentComponent,

  ]
})
export class MainModule { }
