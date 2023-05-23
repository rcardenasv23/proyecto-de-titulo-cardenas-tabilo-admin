import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    if(route.routeConfig?.path === "login" && localStorage.getItem('subasterAdminToken')){
      this.router.navigate(['admin'])
    }
    else if(route.routeConfig?.path === "admin" && !localStorage.getItem('subasterAdminToken')){
      this.router.navigate(['login'])
    }
    return true;
  }

}
