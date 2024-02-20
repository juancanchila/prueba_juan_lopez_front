import { Component, OnInit } from '@angular/core';
import { AuthorOfTheWeek } from '../../../interfaces/author-of-the-week.interface';
import { ExampledataService } from '../../../core/services/exampledata.service';
import { Router } from '@angular/router'; // Import Router
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  authors: AuthorOfTheWeek[] = [];
  constructor(private exampledataService: ExampledataService,private router: Router) { }
  ngOnInit(): void {
    this.authors = this.exampledataService.getAuthorsOfTheWeek();

  }
}
