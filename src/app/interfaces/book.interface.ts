// book.interface.ts
import { AuthorOfTheWeek } from './author-of-the-week.interface';

export interface Book {
  pic: string;
  name: string;
  link: string;
  rate: number;
  author: AuthorOfTheWeek;
  description: string;
  subject: string;
  tag: string;
  visibility: number;
  gender:string;
}
