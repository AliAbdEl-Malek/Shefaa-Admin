import { AdminService } from '../../../services/admin.service';
import { APIResponse } from './../../../models/Api-response';
import { Admin } from '../../../models/admin';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private httpClient: HttpClient, private _apiService: ApiService, private _router: Router, private _adminService: AdminService) { }

  formGroup: FormGroup;

  newAdmin: Admin[] = []
  // googleUsers:User[]=[]

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(50)]],
      password: ['', [Validators.required]],

    })
  }

  addAdmin() {
    let admin = new Admin();
    admin = this.formGroup.value
    // console.log(this.formGroup.value)

    this._apiService.post('admin/signup', admin).subscribe((response) => {
      let obj = response as APIResponse
      console.log("Data from server", obj)
      if (obj.status) {
        admin = obj.Data
        this.newAdmin.push(admin)

        //add token to local storage
        console.log(obj.token)
        this._adminService.addToken(obj.token)

        // alert(obj.message)
        this._adminService.isLogged()
        this._router.navigateByUrl('')
        console.log("admin stored in array", this.newAdmin)
      }
      else {
        alert(obj.message)
      }
    })
  }


  googleSignup() {

    let admin = new Admin();
    //connect to our api and call google api from server
    this.httpClient.get('auth/google').subscribe((response) => {
      let obj = response as APIResponse
      console.log(obj)
      if (obj.status) {
        admin = obj.Data
        this.newAdmin.push(admin)

        //add token to local storage
        console.log(obj.token)
        this._adminService.addToken(obj.token)
        // alert(obj.message)
        this._adminService.isLogged()
        this._router.navigateByUrl('')
        console.log("admin stored in array", this.newAdmin)

      } else {
        alert(obj.message)
      }

    })

  }





}
