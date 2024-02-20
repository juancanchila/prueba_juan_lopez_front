// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module'; // Import PagesRoutingModule
// Import other modules or components if needed

const routes: Routes = [
  // Define other routes if needed
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule // Include PagesRoutingModule here
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
