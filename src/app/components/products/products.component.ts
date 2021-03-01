import { Product } from './../../models/Product';
import { Admin } from './../../models/admin';
import { APIResponse } from './../../models/Api-response';
import { AdminService } from './../../services/admin.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 admin:Admin;
 products:Product[]=[];
 adminID:any;
  constructor(private _apiService: ApiService, private _adminService:AdminService) { }

  ngOnInit(): void {
    // Get Admin
    let token = this._adminService.getToken()
    console.log("Token is:", token)
    this._apiService.get('admin/get/'+token).subscribe((response)=>{
      let obj = response as APIResponse
      console.log("Admin retrieved : ", obj)
      this.admin = obj.Data
      this.adminID = obj.Data["id"]
    })

    // ---- Get Products

    this._apiService.get('product').subscribe((response)=>{
      let obj = response as APIResponse;
      console.log("Product retreived is:", obj);
      if (obj.status) {
        let productData = obj.Data
        this.products = productData
      }
      else {
        alert(obj.message)
      }
      
      
    })


  }

  // delete(id: any, index: any) {
  //   console.log("deleted product :" , id)
  //   this._apiService.put(`product/delete/${id}`,this.admin).subscribe((response) => {
  //     let obj = response as APIResponse
  //     if (obj.status) {
  //       console.log(obj.message)
  //     } else {
  //       console.log(obj.message)
  //     }
  //   });
  //   this.products.splice(index, 1);
    
  // }

}
