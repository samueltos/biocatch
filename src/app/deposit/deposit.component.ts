import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeService } from '../home/home.service';
import { LoginService } from '../login/login.service';
import { User } from '../login/user';
import { Deposit } from './deposit';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent  implements OnInit{
  pageTitle = "deposit";
  user: User;
  deposit: Deposit = new Deposit();
  apiResponse: String = "";

  constructor(private router: Router, private route: ActivatedRoute, private homeService: HomeService, 
    private app: AppComponent, private logInService: LoginService){
      
  }


  ngOnInit(){
      this.app.isUserLoggedIn = true;
      this.user = this.logInService.shareUSer();
  }

  onSubmit(){
    this.deposit.customerId = this.user.customerId;
    this.homeService.deposit(this.deposit).subscribe(data => {
      this.apiResponse = data;
    });
    window.alert("Deposit Successful");
    this.router.navigate(['/home']);
  }

}
