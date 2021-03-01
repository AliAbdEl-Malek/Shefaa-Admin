import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { APIResponse } from './../../models/Api-response';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _apiService: ApiService, private _router: Router, private _userService: UserService) { }
  users: User[] = [];
  isLogged: boolean

  ngOnInit(): void {
    let token = this._userService.getToken()
    console.log("Token is:", token)
    this._apiService.get('user').subscribe((response) => {
      let obj = response as APIResponse
      console.log("users Retrieved: ", obj)
      if (obj.status) {
        this.users = obj.Data
      }
      // else {
      //   alert(obj.message)
      // }
    })
    this.isLogged = this._userService.isLogged()
  }

  delete(id: any, index: any) {
    console.log("deleted user :" , id)
    if (confirm("Are you sure you want to delete this user ?!")) {
      this._apiService.delete(`user/delete/${id}`).subscribe((response) => {
        let obj = response as APIResponse
        if (obj.status) {
          alert(obj.message)
          console.log(obj.message)
        } else {
          console.log(obj.message)
        }
      });
      this.users.splice(index, 1);
    }
    else {
      console.log("do nothing")
    }
  
  }

}
