import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { APIResponse } from './../../models/Api-response';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _apiService: ApiService, private _router: Router, private _userService: UserService) { }
  users: User[] = [];
  isLogged: boolean;
  disabled: boolean = false;
  show: boolean = true;
  buttonName: any = 'Deactivate';

  ngOnInit(): void {
    let token = this._userService.getToken()
    console.log("Token is:", token)
    // this._apiService.get('user').subscribe((response) => {
    //   let obj = response as APIResponse
    //   console.log("users Retrieved: ", obj)
    //   if (obj.status) {
    //     this.users = obj.Data
    //   }
    //   // else {
    //   //   alert(obj.message)
    //   // }
    // })
    // this.isLogged = this._userService.isLogged()

    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this._apiService.get('user'))
      )
      .subscribe((response) => {
        let obj = response as APIResponse
        console.log("users Retrieved: ", obj)
        if (obj.status) {
          this.users = obj.Data
        }
      })
    this.isLogged = this._userService.isLogged();
  }





  Deactivate(id: any, index: any) {
    this.show = false;
    console.log("Deactivated user :", id)
    if (confirm("Are you sure you want to deactivate this user ?!")) {
      this._apiService.userActivation(`user/deactivate/${id}`).subscribe((response) => {
        let obj = response as APIResponse
        if (obj.status) {
          // alert(obj.message)
          console.log(obj.message)
        } else {
          console.log(obj.message)
        }
      });
      // this.users.splice(index, 1);
      // alert(`User ${id} Deactivated`)
    }
    else {
      console.log("do nothing")
    }

  }

  Activate(id: any, index: any) {
    this.show = true;
    console.log("Activated user :", id)
    if (confirm("Are you sure you want to Activate this user ?!")) {
      this._apiService.userActivation(`user/activate/${id}`).subscribe((response) => {
        let obj = response as APIResponse
        if (obj.status) {
          // alert(obj.message)
          console.log(obj.message)
        } else {
          console.log(obj.message)
        }
      });
      // this.users.splice(index, 1);
      // alert(`User ${id} Activated`)
    }
    else {
      console.log("do nothing")
    }

  }


  // toggle(id: any, index: any) {
  //   this.show = !this.show;

  //   // CHANGE THE NAME OF THE BUTTON.
  //   if(this.show)  
  //   {this.Deactivate(id, index);
  //     this.buttonName = "Activate";
  //   }
  //   else{
  //     this.Activate(id,index);
  //     this.buttonName = "Deactivate";
  //   }
  // }

}
