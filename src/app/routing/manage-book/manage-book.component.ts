import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent implements OnInit {

  books : Book[];
  book : Book = new Book();
  constructor(private bookService : BookService,private router : Router) { }

  getBooks() :void{
    this.bookService.getBooks().then(books => this.books = books);
  }
  ngOnInit() {
    this.getBooks();
  }
  updateBook(id:number) :void{
    this.router.navigate(['/update-book',id]);
  }

  deleteBook(id:number){
    this.bookService.deleteBook(id);
  }
}
