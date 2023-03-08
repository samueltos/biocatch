import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
declare let scripts: any;
declare let index: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'biocatch';
  pageTitle = "app";
  @Input() public isUserLoggedIn: boolean;


  loginstatus:String = "";

  constructor(private route: Router){

  }

  setLoginStatus(val: String){
    this.isUserLoggedIn = true;
    this.loginstatus = val;
  }



  logout(){
    this.isUserLoggedIn = false;
    this.route.navigate(['/']);
  }

}
