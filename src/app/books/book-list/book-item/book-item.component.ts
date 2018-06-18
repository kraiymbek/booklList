import {Component, OnInit, Input} from '@angular/core';
import {Book} from "../../book.model";
import {BookService} from "../../book.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-item',
  templateUrl: 'book-item.component.html',
  styleUrls: ['book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;
  @Input() index: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private bookService: BookService){

  }



  ngOnInit() {
  }

  onEditBook(){
    this.router.navigate([this.index], {relativeTo: this.route});
  }

  onDeleteBook(){
    this.bookService.deleteBook(this.index);

  }



}
