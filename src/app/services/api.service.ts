import { AdminService } from './admin.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient, private _adminService:AdminService ) {

  }

   token:any = this._adminService.getToken()

  get(url:string){
    return this.httpClient.get(`${environment.APIURL}/${url}`,{headers:{'authorization':this.token}});
  }

  post(url:string,admin:any){
    return this.httpClient.post(`${environment.APIURL}/${url}`,admin)
  }

  put(url:string,admin:any){
    return this.httpClient.put(`${environment.APIURL}/${url}`,admin,{headers:{'authorization':this.token}})
  }

  userActivation(url:string){
    return this.httpClient.put(`${environment.APIURL}/${url}`,{headers:{'authorization':this.token}})
  }


  delete(url:string){
    return this.httpClient.delete(`${environment.APIURL}/${url}`)
  }

  
}

// ,{headers:{'authorization':this.token}}