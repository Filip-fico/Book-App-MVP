import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl = 'http://localhost:5000/api/';

  constructor(
    private http: HttpClient,
  ) { }

  public createBook(bookData: any, coverImage: File, bookFile: File) {
    console.log('Creating book');

    const formData = new FormData();
    formData.append('title', bookData.title);
    formData.append('author', bookData.author);
    formData.append('genre', bookData.genre);
    formData.append('description', bookData.description);
    formData.append('coverImage', coverImage);
    formData.append('bookFile', bookFile);

    return this.http.post(`${this.apiUrl}/admin/books/create`, formData);

  }

  public loadAllBooks() {
    return this.http.get(`${this.apiUrl}/admin/books/list`);
  }

  public deleteBook(bookId: string) {
    return this.http.delete(`${this.apiUrl}/admin/books/delete/${bookId}`);
  }

  public searchBooks(search: string) {
    return this.http.get(`${this.apiUrl}/user/books/search?search=${search}`);
  }

}
