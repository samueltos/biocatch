import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeService } from '../home/home.service';
import { LoginService } from '../login/login.service';
import { User } from '../login/user';
import { Payment } from './payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit{
  user: User;
  payment: Payment = new Payment;
  balance: number;
  customerId: String = "";
  apiResponse: String = "";

  constructor(private router: Router, private route: ActivatedRoute, private homeService: HomeService, 
    private app: AppComponent, private logInService: LoginService){
      
  }


  ngOnInit(){
      this.app.isUserLoggedIn = true;
      this.user = this.logInService.shareUSer();
      this.balance = this.homeService.shareBalance();
      this.customerId = this.user.customerId;
  }

  onSubmit(){
    if(this.payment.amount > this.balance){
      window.alert("Insufficient Balance");
    }else{
      this.payment.customerId = this.customerId;
      this.homeService.addTransaction(this.payment).subscribe(data => {
        this.apiResponse = data;
        window.alert("Transaction Successful");
        this.router.navigate(['/home']);
      });
    } 
  }

}
