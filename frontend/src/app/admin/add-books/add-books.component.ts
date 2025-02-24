import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from "../admin-navbar/admin-navbar.component";
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-add-books',
  imports: [AdminNavbarComponent, AdminSidebarComponent],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent implements OnInit {

  ngOnInit(): void {
    // initFlowbite()
  }

}
