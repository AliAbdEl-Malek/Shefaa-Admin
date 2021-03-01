import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _apiService: ApiService) { }


  getOrders():Observable<any>{
    return this._apiService.get('order/')
  }

  getProcessingOrders():Observable<any>{
    return this._apiService.get('order/get/processing')
  }
}