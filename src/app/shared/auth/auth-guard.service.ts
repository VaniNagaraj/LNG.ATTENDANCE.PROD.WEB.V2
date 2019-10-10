
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'app/login/services/authentication.service ';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    console.log('Current user ==> ');
    console.log(currentUser);
    if (currentUser) {
      // check if route is restricted by role
      // if (route.data.roles && route.data.roles.indexOf(currentUser.loginId) === -1) {
      //   // role not authorised so redirect to home page
      //   this.router.navigate(['/login']);
      //   return false;
      // }

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    this.router.navigate(['/login']);
    // window.location.reload();
    return false;
  }
}
