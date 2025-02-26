import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { initFlowbite } from 'flowbite';
import { BooksService } from '../../shared/services/books/books.service';
import { ToastService } from '../../shared/services/toast/toast.service';
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { DialogService } from '../../shared/services/dialog/dialog.service';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-books',
  imports: [AdminNavbarComponent, AdminSidebarComponent, CommonModule],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent implements OnInit, AfterViewInit {

  public list!: Array<{
    title: string
    author: string
    genre: string
    description: string
    coverImage: string
    bookFile: string
    createdAt: string
    updatedAt: string
    _id: string
  }>

  constructor(
    private booksService: BooksService,
    private dialogService: DialogService,
    private toastService: ToastService,
  ) {

  }

  ngOnInit(): void {
    this.booksService.loadAllBooks().subscribe((response: any) => {
      this.list = this.prepareBooksDataForDisplay(response.data)
      console.log(this.list)
      setTimeout(() => {
        initFlowbite()
      }, 300);
    })
  }

  ngAfterViewInit(): void {

  }

  private prepareBooksDataForDisplay(books: any) {
    return books.map((book: any) => {
      book.description = book.description.substring(0, 50) + '...'
      return book
    })
  }

  public deleteBook(bookId: string) {
    this.dialogService.open(DialogComponent, {
      data: {
        action: 'confirm',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Yes, Delete',
        message: 'Are you sure you want to delete this book?'
      }
    }).afterClosed().subscribe((response: any) => {
      if (response) {

        this.booksService.deleteBook(bookId).subscribe((response: any) => {
          let message = ""
          let deleted = false
          if (response["success"]) {
            message = "Book deleted successfully"
            deleted = true
            this.list = this.list.filter(book => book._id !== bookId)
          } else {
            message = "Failed to delete book"
          }
          this.toastService.open(ToastComponent, {
            data: {
              action: deleted ? 'success' : 'danger',
              message: message
            }
          })
        })
      }
    })
  }

}
