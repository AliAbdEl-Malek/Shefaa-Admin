import { APIResponse } from './../../models/Api-response';
import { ApiService } from './../../services/api.service';
import { AdminService } from './../../services/admin.service';
import { Admin } from './../../models/admin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  constructor(private _apiService: ApiService, private _router: Router, private _adminService: AdminService) { }
  admins: Admin[] = [];
  isLogged: boolean

  ngOnInit(): void {
    let token = this._adminService.getToken()
    console.log("Token is:", token)
    this._apiService.get('admin').subscribe((response) => {
      let obj = response as APIResponse
      console.log("admins Retrieved: ", obj)
      if (obj.status) {
        this.admins = obj.Data
      }
      // else {
      //   alert(obj.message)
      // }
    })
    this.isLogged = this._adminService.isLogged()
  }

  delete(id: any, index: any) {
    console.log("deleted admin :" , id)
    if (confirm("Are you sure you want to delete this admin ?!")) {
      this._apiService.delete(`admin/delete/${id}`).subscribe((response) => {
        let obj = response as APIResponse
        if (obj.status) {
          alert(obj.message)
          console.log(obj.message)
        } else {
          console.log(obj.message)
        }
      });
      this.admins.splice(index, 1);
    }
    else {
      console.log("do nothing")
    }
  
  }

}
