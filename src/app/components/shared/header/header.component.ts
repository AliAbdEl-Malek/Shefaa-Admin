import { Admin } from './../../../models/admin';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { APIResponse } from './../../../models/Api-response';
import { ApiService } from './../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _apiService: ApiService, private _router: Router, private _adminService: AdminService) { }
  admin: Admin;
  searchText: string = '';
  isLogged: boolean

  ngOnInit(): void {

    let token = this._adminService.getToken()
    console.log("Token is:", token)
    this._apiService.get('admin/get/' + token).subscribe((response) => {
      let obj = response as APIResponse
      console.log("admin Retrieved: ", obj)
      if (obj.status) {
        this.admin = obj.Data
      }
      // else {
      //   alert(obj.message)
      // }
    })
    this.isLogged = this._adminService.isLogged()
    
  }

  updateSearchText(value: string) {
    this.searchText = value
    console.log(this.searchText)
  }

}
