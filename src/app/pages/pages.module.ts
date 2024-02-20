import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NopagefoundComponent } from './component/nopagefound/nopagefound.component';
import { HomeComponent } from './front/home/home.component';
import { SliderComponent } from './front/slider/slider.component';
import { SidebarComponent } from './front/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NopagefoundComponent,
    DashboardComponent,
    HomeComponent,
    SliderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
