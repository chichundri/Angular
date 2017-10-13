import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { BookDirective } from '../directives/book.directive';
@Component({
  selector: 'favourite-books',
  templateUrl: './favourite-books.component.html',
  styleUrls: ['./favourite-books.component.css']
})
export class FavouriteBooksComponent implements AfterContentInit {

  constructor() { }

  //QueryList + @ContentChildren + Directive
  @ContentChildren(BookDirective)
  private topBooks : QueryList<BookDirective>

  @ContentChildren(BookDirective, {descendants : true})
  private allBooks : QueryList<BookDirective>

  ngAfterContentInit() {
    console.log("--- Top Books ---");
    this.topBooks.forEach(book => console.log(book.bookId +" - "+ book.bookName));
  }

}
