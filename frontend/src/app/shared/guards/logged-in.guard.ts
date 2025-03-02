import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const loggedinUser = authService.getLoggedinUser()
  if (loggedinUser) {
    return true
  } else {
    router.navigate(['/auth/login'])
    return false
  }
};
