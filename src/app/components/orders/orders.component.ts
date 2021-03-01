import { Order } from './../../models/order';
import { APIResponse } from './../../models/Api-response';
import { AdminService } from './../../services/admin.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:Order[]=[];
  constructor(private _apiService: ApiService, private _adminService:AdminService,private _router: Router) { }

  ngOnInit(): void {


    this._apiService.get("order/get/delivered").subscribe((response) => {
      let obj = response as APIResponse
      if (obj.status) {
        this.orders = obj.Data
        console.log("Retrieved Orders Data",obj.Data);
      } else {
        console.log("Response from getting orders ",obj.message)
      }
    })
  }

}
