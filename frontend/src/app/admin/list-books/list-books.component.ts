import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-list-books',
  imports: [AdminNavbarComponent, AdminSidebarComponent],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent implements OnInit, AfterViewInit {

  public list = [1, 2, 3, 4, 5, 6, 7]

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    initFlowbite()
  }

}
