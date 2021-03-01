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

    //call to get all deliverd orders
    interval(20000).pipe(
      startWith(0),
      switchMap(() => this._adminService.getPreviousOrders())
    ).subscribe((response) => {
      let obj = response as APIResponse
      if (obj.status) {
        this.orders = obj.Data
        console.log(this.orders);
      } else {
        console.log(obj.message)
      }
    })

    // //call to get all deliverd orders
    // this._apiService.get('order/admin/deliverd').subscribe((response) => {
    //   let obj = response as APIResponse
    //   if (obj.status) {
    //     this.orders = obj.Data
    //     console.log(this.orders);
    //   } else {
    //     console.log(obj.message)
    //   }
    // })


  }





}
