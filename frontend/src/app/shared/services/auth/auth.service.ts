import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
  ) { }

  login(email: string, password: string) {
    // For now set user data in session
    let user = {
      email, password, isAdmin: false
    }
    if (email === "admin@litelit.com") {
      user.isAdmin = true
    }
    sessionStorage.setItem('user', JSON.stringify(user))
    return user
  }

  getLoggedinUser() {
    let userDataInSession = sessionStorage.getItem('user')
    if (!userDataInSession) {
      return null
    }
    return JSON.parse(userDataInSession)
  }

  logout() {
    sessionStorage.removeItem('user')
    this.router.navigate(['/auth/login'])
  }

}
