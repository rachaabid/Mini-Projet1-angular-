import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  constructor(private _router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const connectedUser = JSON.parse(localStorage.getItem('connectedUser')||'[]');
      if(connectedUser.length == 0){
        this._router.navigate(['/Login']);
        return false;
      }
      else{
        return true;
      }
    
  }
 
  
}
