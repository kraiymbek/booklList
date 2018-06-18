import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Book} from "../book.model";

@Component({
  selector: 'app-book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;

  constructor(private booService: BookService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              this.id = +params['id'];
              this.book = this.booService.getBook(this.id);
            }
        )
  }

  onEditBook(){
    this.router.navigate(['edit'],{relativeTo: this.route});
  }

  onBack(){
      this.router.navigate(['../'], {relativeTo: this.route});
  }

}
