import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NopagefoundComponent } from './component/nopagefound/nopagefound.component';
import { HomePipe } from './front/home.pipe';
import { HomeComponent } from './front/home/home.component';



@NgModule({
  declarations: [
    NopagefoundComponent,
    DashboardComponent,
    HomePipe,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
