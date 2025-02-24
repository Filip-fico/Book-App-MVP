import { Route } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddBooksComponent } from "./add-books/add-books.component";
import { ListBooksComponent } from "./list-books/list-books.component";

export default [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'books/add',
        component: AddBooksComponent
    },
    {
        path: 'books/list',
        component: ListBooksComponent
    },
] satisfies Route[];