import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginService } from '../login/login.service';
import { User } from '../login/user';
import { HomeService } from './home.service';
import { Transaction } from './transaction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = "home";

  user: User;
  transactions: Transaction[];
  balance: number;
  customerId: String = "";

  constructor(private router: Router, private route: ActivatedRoute, private homeService: HomeService, 
    private app: AppComponent, private logInService: LoginService){
      app.isUserLoggedIn = true;
      this.user = logInService.shareUSer();
  }

  ngOnInit(){
      this.homeService.transactions(this.user).subscribe(data => {
        this.transactions = data;
      });

      this.customerId = this.user.customerId;
      this.homeService.balance(this.customerId).subscribe(data => {
        this.balance = data;
        this.homeService.setBalance(this.balance);
      });
  }




}
