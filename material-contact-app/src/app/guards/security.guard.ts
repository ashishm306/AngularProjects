import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { DataService } from '../services/data.service';
import { map, catchError } from "rxjs/operators";
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {
  constructor(private router: Router, private service: DataService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.service.isAuthenticated().pipe(map((data: any) => {
      if (data.isAuthenticated) {
        return true;
      }
      return false;
    }), catchError((err: HttpErrorResponse) => {
      this.router.navigateByUrl('/login');
      return throwError(err);
    }));
  }

}
