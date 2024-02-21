import { Component, OnInit } from '@angular/core';
import { ExampledataService } from '../../../core/services/exampledata.service';
import { Book } from '../../../interfaces/book.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  genders: string[] = []; // Array to store genders
  booksByGender: { [gender: string]: Book[] } = {}; // Object to store books by gender
  selectedGender: string = "Romace"; // Variable to store the currently selected gender

  constructor(private exampleDataService: ExampledataService) { }

  ngOnInit(): void {
    // Fetch genders from the service
    this.genders = this.exampleDataService.getGenders();

    // Initialize booksByGender object with empty arrays for each gender
    this.genders.forEach(gender => {
      this.booksByGender[gender] = [];
    });

    // Fetch books for each gender from the service and populate booksByGender
    this.genders.forEach(gender => {
      this.booksByGender[gender] = this.exampleDataService.getBooksByGender(gender);
    });

    // Set the default selected gender
    this.selectedGender = this.genders[0]; // Set the first gender as default
  }
}
