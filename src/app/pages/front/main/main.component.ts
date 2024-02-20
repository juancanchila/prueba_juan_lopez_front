import { Component, OnInit } from '@angular/core';
import { ExampledataService } from '../../../core/services/exampledata.service';
import { Book } from '../../../interfaces/book.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  books: Book[] = []; // Initialize with your data

  constructor(private exampleDataService: ExampledataService) { }

  ngOnInit(): void {
    this.books = this.exampleDataService.getExampleBooks();
    console.log(this.books);

  }
}
