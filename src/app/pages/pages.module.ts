import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NopagefoundComponent } from './component/nopagefound/nopagefound.component';
import { HomeComponent } from './front/home/home.component';
import { SliderComponent } from './front/slider/slider.component';



@NgModule({
  declarations: [
    NopagefoundComponent,
    DashboardComponent,
    HomeComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
