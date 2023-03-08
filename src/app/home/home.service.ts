import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Deposit } from '../deposit/deposit';
import { User } from '../login/user';
import { Payment } from '../payment/payment';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private customerBalance: number;
  private apiBaseUrl: String;

  constructor(private http: HttpClient) { 
    this.apiBaseUrl = environment.apiBaseTUrl;
  }

  public transactions(user:User): Observable<Transaction[]>{
    return this.http.post<Transaction[]>(`${this.apiBaseUrl}/`, user);
  } 

  public addTransaction(transaction: Payment): Observable<String>{
    return this.http.post<String>(`${this.apiBaseUrl}/transaction`, transaction);
  }

  public balance(customerId: String): Observable<number>{
    return this.http.get<number>(`${this.apiBaseUrl}/balance/${customerId}`);
  }

  public deposit(amount: Deposit): Observable<String>{
    return this.http.post<String>(`${this.apiBaseUrl}/deposit`, amount);
  }

  public shareBalance(){
    return this.customerBalance;
  }

  public setBalance(customer: number){
    this.customerBalance = customer;
  }
}
