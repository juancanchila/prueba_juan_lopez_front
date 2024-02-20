import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NopagefoundComponent } from './component/nopagefound/nopagefound.component';



@NgModule({
  declarations: [
    NopagefoundComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
