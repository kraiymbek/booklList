
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {BookListComponent} from "./books/book-list/book-list.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {BookDetailComponent} from "./books/book-detail/book-detail.component";
import {BookEditComponent} from "./books/book-edit/book-edit.component";
import {BooksComponent} from "./books/books.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/books',pathMatch: 'full'},
    {path: 'books', component: BooksComponent, children: [
        {path: '', component: BookListComponent},
        {path:'new', component: BookEditComponent},
        {path:':id', component: BookDetailComponent},
        {path:':id/edit', component: BookEditComponent}

    ]},
    {path: 'contacts', component: ContactsComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

export class AppRoutingModule{

}