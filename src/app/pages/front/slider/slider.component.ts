import { Component, OnInit } from '@angular/core';
import { ExampledataService } from '../../../core/services/exampledata.service';
import { Book } from '../../../interfaces/book.interface';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({
        opacity: 1
      })),
      state('out', style({
        opacity: 0
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})
export class SliderComponent implements OnInit {
  books: Book[] = []; // Initialize with your data
  slideState: string = 'in'; // Initial state
  fadeState: string = 'in'; // Initial fade state

  constructor(private exampleDataService: ExampledataService) { }

  ngOnInit(): void {
    this.books = this.exampleDataService.getExampleBooks();
  }
  moveRight(): void {
    // Shift the books array to the left by one item
    const firstBook = this.books.shift();
    if (firstBook !== undefined) {
        // Append the first book to the end of the array
        this.books.push(firstBook);
    }
    // Trigger the animation to fade out
    this.fadeState = 'out';
    setTimeout(() => {
      // Reset the state after animation
      this.fadeState = 'in';
    }, 300); // Adjust timing to match the animation duration
  }

  moveLeft(): void {
    // Pop the last book from the array
    const lastBook = this.books.pop();
    if (lastBook !== undefined) {
        // Insert the last book at the beginning of the array
        this.books.unshift(lastBook);
    }
    // Trigger the animation to fade out
    this.fadeState = 'out';
    setTimeout(() => {
      // Reset the state after animation
      this.fadeState = 'in';
    }, 300); // Adjust timing to match the animation duration
  }

  getStars(rate: number): boolean[] {
    const stars: boolean[] = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rate);
    }
    return stars;
  }
}
