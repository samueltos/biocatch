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
  pageTitle = "login";
  userlogin: UserLogin = new UserLogin();
  user: User;

  constructor(private router: Router, private loginService: LoginService, private app: AppComponent){

  }

  ngOnInit(): void {
  }

  loginCheck(){

    this.loginService.login(this.userlogin).subscribe(data => {
        if(data == null){
          this.userNotLogin();
        }else{
          this.user = data;
          this.app.isUserLoggedIn = true;
          this.app.loginstatus = this.user.firstName;
          this.app.setLoginStatus(this.user.firstName);
          this.homepage(this.user);
        }
        
    });
  }

  userNotLogin(){
    window.alert("Wrong user name or password");
  }

  homepage(user: User){
    // this.router.navigate(['/home', this.user]);
    this.loginService.setShareUser(this.user)
    this.router.navigate(['/home']);
  }




}
