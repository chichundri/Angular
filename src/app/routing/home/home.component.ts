import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookService : BookService) { }
  books : Book[];
  getBooks() {
    this.bookService.getBooks().then(books => this.books = books);
  }

  ngOnInit() {
    this.getBooks();
  }

}
