import {Book} from "./book.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";
export class BookService {

    booksChanged = new Subject<Book[]>();

    private books: Book[] = [
        new Book('The English Girl: A Novel','' +
            'Бывает, что человек рождается, опережая время, и своими изобретениями меняет мир... А бывает, что мир делает скачок вперед, и ты не успеваешь родиться в свое время.',
            'Бывает, что человек рождается, опережая время, и своими изобретениями меняет мир... А бывает, что мир делает скачок вперед, и ты не успеваешь родиться в свое время. И живешь с невыносимым желанием сменить серость офисных будней на сладостный уху звон булата, рёв боевого горна и крепкое плечо соратника. ',
            'https://author.today/content/2018/05/22/611017fbf68b42bfabdf84f17c16aaf1.jpg?width=153&height=200&mode=max',
            'Алексей Тихий',
            'action',
            new Date()),
        new Book('The English Girl: A Novel','' +
            'Бывает, что человек рождается, опережая время, и своими изобретениями меняет мир... А бывает, что мир делает скачок вперед, и ты не успеваешь родиться в свое время.',
            'Бывает, что человек рождается, опережая время, и своими изобретениями меняет мир... А бывает, что мир делает скачок вперед, и ты не успеваешь родиться в свое время. И живешь с невыносимым желанием сменить серость офисных будней на сладостный уху звон булата, рёв боевого горна и крепкое плечо соратника. ',
            'https://author.today/content/2018/05/22/611017fbf68b42bfabdf84f17c16aaf1.jpg?width=153&height=200&mode=max',
            'Алексей Тихий',
            'action',
            new Date())
    ];

    getBooks(){
        return this.books.slice();
    }

    getBook(id: number){
        return this.books.slice()[id];
    }

    addBook(book: Book){
        this.books.push(book);
        this.booksChanged.next(this.books.slice());

    }

    updateBook(id: number, newBook: Book){
        this.books[id] = newBook;
        this.booksChanged.next(this.books.slice());

    }

    deleteBook(id: number){
        this.books.splice(id,1);
        this.booksChanged.next(this.books.slice());
        }

}