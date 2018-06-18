import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { ContactsComponent } from './contacts/contacts.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      BookListComponent,
      BookDetailComponent,
      BookItemComponent,
      BookEditComponent,
      ContactsComponent,
      BooksComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      AppRoutingModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
