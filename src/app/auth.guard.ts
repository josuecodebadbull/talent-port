import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { menu } from './config/menu';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  menu = menu;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const result = menu.filter(x => x.navigateTo == state.url)
    return result.length > 0 ? true : false;
  }

}
