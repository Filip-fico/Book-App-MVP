import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const loggedinUser = authService.getLoggedinUser()
  if (!loggedinUser) {
    router.navigate(['/auth/login'])
    return false
  } else if (!loggedinUser.isAdmin) {
    router.navigate(['/library'])
    return false
  } else {
    return true
  }
};
