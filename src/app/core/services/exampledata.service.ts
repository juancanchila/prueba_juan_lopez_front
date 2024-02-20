// exampledata.service.ts
import { Injectable } from '@angular/core';
import { AuthorOfTheWeek } from '../../interfaces/author-of-the-week.interface';

@Injectable({
  providedIn: 'root'
})
export class ExampledataService {

  constructor() { }

  // Method to fetch example authors of the week
  getAuthorsOfTheWeek(): AuthorOfTheWeek[] {
    // Mock data
    const authors: AuthorOfTheWeek[] = [
      { name: 'User 1', role: 'author', authorOfWeek: 5, profilePic: 'assets/images/users/1.jpg', profileLink: '/profile/1' },
      { name: 'User 2', role: 'author', authorOfWeek: 3, profilePic: 'assets/images/users/2.jpg', profileLink: '/profile/2' },
      // Add more mock data as needed
    ];
    return authors;
  }

  // Method to fetch example data for another feature
  getOtherExampleData(): any[] {
    // Mock data for another feature
    const otherData: any[] = [
      // Define other example data
    ];
    return otherData;
  }

  // Add more methods for different types of example data as needed
}
