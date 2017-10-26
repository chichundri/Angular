import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';
import { HomeComponent }  from './home/home.component';
import { ViewDetailComponent }  from './view-detail/view-detail.component';
import { AddBookComponent }  from './add-book/add-book.component';
import { UpdateBookComponent }  from './update-book/update-book.component';
import { ManageBookComponent }  from './manage-book/manage-book.component';
import { BookService } from './book.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'view-detail/:id', component: ViewDetailComponent },		  
  { path: 'add-book', component: AddBookComponent },
  { path: 'manage-book', component: ManageBookComponent },
  { path: 'update-book/:id', component: UpdateBookComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports : [ RouterModule ],
  providers : [BookService]
})
export class AppRoutingModule { }
