import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserI } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<UserI[]> {
    return this.http.get<any>(this.userUrl);
  }
  
  getById(id: string): Observable<UserI> {
    return this.http.get<UserI>(`${this.userUrl}/${id}`);    
  }
}
