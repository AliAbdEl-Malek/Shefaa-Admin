import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logged = new Subject<boolean>();


  constructor(private httpClient:HttpClient) { }

  addToken(token: string) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }


  logout() {
    localStorage.removeItem("token");
    //this.logged.next(false);
    this.setLoggedStatus(false);
  }



  setLoggedStatus(status: boolean) {
    this.logged.next(status);
  }

  getLoggedStatus(): Observable<any> {
    return this.logged.asObservable();
  }

  isLogged(): boolean {
    let token = localStorage.getItem("token");
    if (token == null)
      return false;

    return true;
  }

  getPreviousOrders(): Observable<any> {
    let token:any = this.getToken()
    return this.httpClient.get(`${environment.APIURL}/order/user/delivered`,{headers:{'authorization':token}});
  }









}
