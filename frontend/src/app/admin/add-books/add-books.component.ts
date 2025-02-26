import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from "../admin-navbar/admin-navbar.component";
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { initFlowbite } from 'flowbite';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { DialogService } from '../../shared/services/dialog/dialog.service';
import { BooksService } from '../../shared/services/books/books.service';
import { Router } from '@angular/router';
import { ToastService } from '../../shared/services/toast/toast.service';
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-books',
  imports: [
    CommonModule,
    AdminNavbarComponent,
    AdminSidebarComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent implements OnInit {

  public generes = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' },
    { id: 3, name: 'Comedy' },
    { id: 4, name: 'Drama' },
    { id: 5, name: 'Fantasy' },
    { id: 6, name: 'Horror' },
    { id: 7, name: 'Mystery' },
    { id: 8, name: 'Romance' },
    { id: 9, name: 'Science Fiction' },
    { id: 10, name: 'Thriller' },
    { id: 11, name: 'Western' }
  ]

  public bookForm: FormGroup;
  private coverImage!: File;
  private bookFile!: File;
  public creatingBook = false;

  constructor(
    private dialogService: DialogService,
    private booksService: BooksService,
    private router: Router,
    private toastService: ToastService,
  ) {
    this.bookForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    // initFlowbite()
  }

  onSubmit() {
    if (!this.coverImage || !this.bookFile) {
      this.dialogService.open(DialogComponent, {
        data: {
          action: 'alert',
          message: 'Please upload both cover image and book file.',
          confirmButtonText: 'Ok',
        }
      });
    } else {
      this.creatingBook = true;
      const bookData = {
        title: this.bookForm.value.title,
        author: this.bookForm.value.author,
        genre: this.bookForm.value.genre,
        description: this.bookForm.value.description
      }
      this.booksService.createBook(bookData, this.coverImage, this.bookFile).subscribe((response: any) => {
        this.creatingBook = false;
        if (response["success"]) {
          this.toastService.open(ToastComponent, {
            data: {
              action: 'success',
              message: 'Book added successfully'
            }
          });
          this.router.navigate(['/admin/books/list']);
        } else {
          console.log(response)
          this.toastService.open(ToastComponent, {
            data: {
              action: 'danger',
              message: 'Failed to add book'
            }
          });
        }
      });

    }
  }

  onCoverImageChange(event: any) {
    const file = event.target.files[0];
    this.coverImage = file;
  }

  onBookFileChange(event: any) {
    const file = event.target.files[0];
    this.bookFile = file;
  }

  // this.dialogService.open(DialogComponent, {
  //   data: {
  //     action: 'confirm',
  //     message: 'Are you sure you want to add this book?',
  //     confirmButtonText: 'Add Book',
  //     cancelButtonText: 'Cancel',
  //   }
  // }).afterClosed().subscribe((result) => {
  //   if (result) {
  //     console.log('Add book');
  //   }
  // })

}
