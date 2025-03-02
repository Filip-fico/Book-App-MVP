import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-library-nav',
  imports: [],
  templateUrl: './library-nav.component.html',
  styleUrl: './library-nav.component.css'
})
export class LibraryNavComponent {

  @Output() public searchBooks = new EventEmitter<string>()

  constructor(
    private authService: AuthService,
  ) { }

  search(event: Event) {
    const target = event.target as HTMLInputElement
    this.searchBooks.emit(target.value)
  }

  logout() {
    this.authService.logout()
  }


}
