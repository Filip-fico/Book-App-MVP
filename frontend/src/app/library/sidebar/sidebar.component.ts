import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
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
}
