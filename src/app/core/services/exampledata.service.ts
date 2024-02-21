// exampledata.service.ts
import { Injectable } from '@angular/core';
import { AuthorOfTheWeek } from '../../interfaces/author-of-the-week.interface';
import { Book } from '../../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class ExampledataService {

  constructor() { }

  // Method to fetch example authors of the week
  getAuthorsOfTheWeek(): AuthorOfTheWeek[] {
    // Mock data
    const authors: AuthorOfTheWeek[] = [
      { name: 'John Doe', role: 'author', authorOfWeek: 5, profilePic: 'assets/images/users/1.jpg', profileLink: '/profile/1' },
      { name: 'Jane Smith', role: 'author', authorOfWeek: 3, profilePic: 'assets/images/users/2.jpg', profileLink: '/profile/2' },
      { name: 'Michael Johnson', role: 'author', authorOfWeek: 7, profilePic: 'assets/images/users/3.jpg', profileLink: '/profile/3' },
      { name: 'Emily Brown', role: 'author', authorOfWeek: 6, profilePic: 'assets/images/users/4.jpg', profileLink: '/profile/4' },
      { name: 'David Williams', role: 'author', authorOfWeek: 9, profilePic: 'assets/images/users/5.jpg', profileLink: '/profile/5' },
      { name: 'Olivia Jones', role: 'author', authorOfWeek: 8, profilePic: 'assets/images/users/6.jpg', profileLink: '/profile/6' },
      { name: 'Matthew Taylor', role: 'author', authorOfWeek: 2, profilePic: 'assets/images/users/7.jpg', profileLink: '/profile/7' },
      { name: 'Sophia Martinez', role: 'author', authorOfWeek: 4, profilePic: 'assets/images/users/8.jpg', profileLink: '/profile/8' }
    ];

    return authors;
  }

  // Method to fetch example data for books
  getExampleBooks(): Book[] {
    // Mock data for example books
    const books: Book[] = [
      {
        pic: 'assets/images/gallery/chair.jpg',
        name: 'One Hundred Years of Solitude',
        link: '/book/1',
        rate: 9,
        author: { name: 'Gabriel García Márquez', role: 'author', authorOfWeek: 1, profilePic: 'assets/images/gabriel_garcia_marquez.jpg', profileLink: '/profile/gabriel_garcia_marquez' },
        description: 'One Hundred Years of Solitude is a landmark 1967 novel by Colombian author Gabriel García Márquez...',
        subject: 'Magical Realism',
        tag: 'Latin American Literature',
        visibility: 1,
        gender: 'Romance' // Added gender property
      },
      {
        pic: 'assets/images/gallery/chair2.jpg',
        name: 'Love in the Time of Cholera',
        link: '/book/2',
        rate: 8,
        author: { name: 'Gabriel García Márquez', role: 'author', authorOfWeek: 2, profilePic: 'assets/images/gabriel_garcia_marquez.jpg', profileLink: '/profile/gabriel_garcia_marquez' },
        description: 'Love in the Time of Cholera is a novel by Colombian Nobel prize winning author Gabriel García Márquez...',
        subject: 'Romance',
        tag: 'Latin American Literature',
        visibility: 1,
        gender: 'Romance' // Added gender property
      },
      {
        pic: 'assets/images/gallery/chair3.jpg',
        name: 'Chronicle of a Death Foretold',
        link: '/book/3',
        rate: 7,
        author: { name: 'Gabriel García Márquez', role: 'author', authorOfWeek: 3, profilePic: 'assets/images/gabriel_garcia_marquez.jpg', profileLink: '/profile/gabriel_garcia_marquez' },
        description: 'Chronicle of a Death Foretold is a novella by Colombian author Gabriel García Márquez...',
        subject: 'Literary Fiction',
        tag: 'Latin American Literature',
        visibility: 1,
        gender: 'History' // Added gender property
      },
      {
        pic: 'assets/images/gallery/chair4.jpg',
        name: 'Memories of My Melancholy Whores',
        link: '/book/4',
        rate: 6,
        author: { name: 'Gabriel García Márquez', role: 'author', authorOfWeek: 4, profilePic: 'assets/images/gabriel_garcia_marquez.jpg', profileLink: '/profile/gabriel_garcia_marquez' },
        description: 'Memories of My Melancholy Whores is a novella by Colombian author Gabriel García Márquez...',
        subject: 'Romance',
        tag: 'Latin American Literature',
        visibility: 1,
        gender: 'Romance' // Added gender property
      }

    ];

    return books;
  }

  getGenders(): string[] {
    const books = this.getExampleBooks();
    const genders: string[] = [];

    books.forEach(book => {
      if (!genders.includes(book.gender)) {
        genders.push(book.gender);
      }
    });

    return genders;
  }


  getBooksByGender(gender: string): Book[] {
    const books = this.getExampleBooks();
    return books.filter(book => book.gender.toLowerCase() === gender.toLowerCase());
  }


}
