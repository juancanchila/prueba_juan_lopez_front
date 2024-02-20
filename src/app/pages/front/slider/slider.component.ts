import { Component, OnInit} from '@angular/core';
import { ExampledataService } from '../../../core/services/exampledata.service';
import {Book } from '../../../interfaces/book.interface';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(-100%)'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})
export class SliderComponent {
  books: Book[] = []; // Initialize with your data
  slideState: string = 'in'; // Initial state

  moveRight(): void {
    // Move to the right
    this.slideState = 'out';
    setTimeout(() => {
      // Reset the state after animation
      this.slideState = 'in';
    }, 300); // Adjust timing to match the animation duration
  }
}