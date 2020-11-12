import { tap, catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:4000/users')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getUsers', []))
    );

  }
}
