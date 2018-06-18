import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {BookService} from "../book.service";
import {Book} from "../book.model";

@Component({
  selector: 'app-book-edit',
  templateUrl: 'book-edit.component.html',
  styleUrls: ['book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: number;
  bookForm: FormGroup;
  editMode = false;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              this.id = +params['id'];
              this.editMode = params['id'] !=null;
              this.initForm();
            }
        )
  }

  private initForm(){
      const book = this.bookService.getBook(this.id);


      let bookName = "";
      let bookDescription = "";
      let bookImagePath = "";
      let bookFullDescription = "";
      let bookGenre = "";
      let bookAuthor = "";

      if(this.editMode){
          bookName = book.name;
          bookDescription = book.description;
          bookImagePath = book.imagePath;
          bookFullDescription = book.fullDescription;
          bookGenre = book.genre;
          bookAuthor = book.author;
      }



      this.bookForm = new FormGroup({
          'name': new FormControl(bookName, Validators.required),
          'imagePath': new FormControl(bookImagePath, Validators.required),
          'description': new FormControl(bookDescription, Validators.required),
          'fullDescription': new FormControl(bookFullDescription, Validators.required),
          'genre' : new FormControl(bookGenre, Validators.required),
          'author' : new FormControl(bookAuthor, Validators.required)
      })
  }

    onSubmit(){
      const newBook = new Book(
          this.bookForm.value['name'],
          this.bookForm.value['description'],
          this.bookForm.value['fullDescription'],
          this.bookForm.value['imagePath'],
          this.bookForm.value['author'],
          this.bookForm.value['genre'],
          new Date()
      );
      if(this.editMode){
          this.bookService.updateBook(this.id, newBook);
      } else {
          this.bookService.addBook(newBook);
      }

      this.onCancel();
    }

    onCancel(){
        this.router.navigate(['/'], {relativeTo: this.route});
    }

}
