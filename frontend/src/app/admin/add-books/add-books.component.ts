import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from "../admin-navbar/admin-navbar.component";
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { initFlowbite } from 'flowbite';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogService } from '../../shared/services/dialog.service';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-add-books',
  imports: [
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

  constructor(private dialogService: DialogService) {
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
      console.log('Add book');
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
