import { Component } from '@angular/core';
import { LibraryNavComponent } from "../library-nav/library-nav.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { initFlowbite } from 'flowbite';
import { BooksService } from '../../shared/services/books/books.service';
import { ToastService } from '../../shared/services/toast/toast.service';
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { DialogService } from '../../shared/services/dialog/dialog.service';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [LibraryNavComponent, SidebarComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

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

  public originalList!: Array<any>
  public displayingSearchResults: boolean = false
  public searching: boolean = false

  constructor(
    private booksService: BooksService,
    private dialogService: DialogService,
    private toastService: ToastService,
  ) {

  }

  ngOnInit(): void {
    this.booksService.loadAllBooks().subscribe((response: any) => {
      this.list = response.data
      this.originalList = response.data
      // this.list.push(...response.data)
      // this.list.push(...response.data)
      console.log(this.list)
      setTimeout(() => {
        initFlowbite()
      }, 300);
    })
  }

  ngAfterViewInit(): void {

  }

  searchBooks(event: any) {
    if (event) {
      this.searching = true
      this.booksService.searchBooks(event).subscribe((response: any) => {
        this.list = response.data
        this.displayingSearchResults = true
        this.searching = false
      })
    }
  }

  clearSearchResults() {
    this.list = this.originalList
    this.displayingSearchResults = false
  }



}
