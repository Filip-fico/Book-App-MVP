import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const loggedoutGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  const loggedinUser = authService.getLoggedinUser()
  if (!loggedinUser) {
    return true;
  } else {
    router.navigate(['/library'])
    return false;
  }
};
