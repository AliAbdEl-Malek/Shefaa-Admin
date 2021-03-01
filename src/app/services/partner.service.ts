import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  logged=new Subject<boolean>();


  constructor( ) {}
 
  addToken(token:string)
  {
    localStorage.setItem("partnerToken",token);
  }
  getToken()
  {
   return localStorage.getItem("partnerToken");
  }


  logout(){
    localStorage.removeItem("partnerToken");
    //this.logged.next(false);
    this.setLoggedStatus(false);
  }

 

  setLoggedStatus(status:boolean)
  {
    this.logged.next(status);
  }

  getLoggedStatus() : Observable<any>{
    return this.logged.asObservable();
  }

  isLogged():boolean
  {
    let token=localStorage.getItem("partnerToken");
    if(token==null)
      return false;

      return true;
  }

  


}
