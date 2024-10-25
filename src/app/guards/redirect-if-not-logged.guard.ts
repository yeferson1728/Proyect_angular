import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const redirectIfNotLoggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('token')) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
