import { Component } from '@angular/core';
import {BookService} from "./books/book.service";
import {Book} from "./books/book.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})
export class AppComponent {

  constructor(private bookService: BookService){}

  ngOnInit(){

  }


}
