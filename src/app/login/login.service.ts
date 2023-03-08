import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserLogin } from './user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userValue: User;
  private apiBaseUrl: String;

  constructor(private http: HttpClient) { 
    this.apiBaseUrl = environment.apiBaseUrl;
  }

  public login(userlogin:UserLogin): Observable<User>{
    return this.http.post<User>(`${this.apiBaseUrl}/logn`, userlogin);
  } 

  public shareUSer(){
    return this.userValue;
  }

  public setShareUser(user: User){
    this.userValue = user;
  }
}
