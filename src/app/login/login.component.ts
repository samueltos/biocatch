import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginService } from './login.service';
import { User } from './user';
import { UserLogin } from './user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  userlogin: UserLogin = new UserLogin();
  user: User;

  constructor(private router: Router, private loginService: LoginService, private app: AppComponent){

  }

  ngOnInit(){
  }

  loginCheck(){

    this.loginService.login(this.userlogin).subscribe({
      next: (resp : User) => {
        this.user = resp;
        this.homePage(this.user)
      },
      error: (err:any) => {
        const error_response = err;
        window.alert(error_response)
      }
    });
  }


  homePage(user: User){
    this.app.isUserLoggedIn = true;
    this.app.loginstatus = this.user.firstName;
    this.app.setLoginStatus(this.user.firstName);
    this.loginService.setShareUser(this.user)
    this.router.navigate(['/home']);
  }



}
