import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  books : Book[];
  book : Book = new Book();
  constructor(private router : Router, private bookService : BookService) { }
  ngOnInit() { 
    this.getBook();
  }

  getBook() : void{
    this.bookService.getBooks().then(books => this.books = books);
  }

  addBook() : void{
    this.bookService.addBook(this.book);
    this.router.navigate(['/home']);
  }
}
