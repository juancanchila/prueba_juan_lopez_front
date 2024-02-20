import { Component, OnInit } from '@angular/core';
import { AuthorOfTheWeek } from '../../../interfaces/author-of-the-week.interface';
import { ExampledataService } from '../../../core/services/exampledata.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {
  authors: AuthorOfTheWeek[] = [];
  constructor(private exampledataService: ExampledataService) { }
  ngOnInit(): void {
    this.authors = this.exampledataService.getAuthorsOfTheWeek();
    console.log('Authors:', this.authors); // Log authors to console
  }
}
