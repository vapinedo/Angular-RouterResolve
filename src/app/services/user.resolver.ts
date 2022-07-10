import { catchError, delay, EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserI } from '../interfaces/user.interface';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<UserI> {
  constructor(private router: Router, private userSvc: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<UserI> {
    return this.userSvc.getById(route.params['id']).pipe(
      catchError(() => {
        delay(400);
        this.router.navigate(['']);
        return EMPTY;
      })
    );
  }
}
