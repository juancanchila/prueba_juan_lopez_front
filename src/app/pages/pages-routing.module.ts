// pages-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './front/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
