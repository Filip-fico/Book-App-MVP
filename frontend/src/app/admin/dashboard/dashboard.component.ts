import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { AdminNavbarComponent } from "../admin-navbar/admin-navbar.component";
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";

@Component({
  selector: 'app-dashboard',
  imports: [AdminNavbarComponent, AdminSidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {


  ngOnInit(): void {

  }

}
