import { AdminService } from './../../../services/admin.service';
import { APIResponse } from './../../../models/Api-response';
import { ApiService } from './../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private _adminService: AdminService, private _apiService: ApiService , private _router: Router) { }

  formGroup: FormGroup;
  verifiedPassword: string;
  token: any;

  ngOnInit(): void {

    this.token = this._adminService.getToken()

    this.formGroup = this._formBuilder.group({

      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    })
  }


  Verify() {
    console.log(this.verifiedPassword)
    console.log(this.formGroup.value.password)
    if (this.formGroup.value.password == this.verifiedPassword) {
      this.resetPassword()
    } else {
      alert("Something is wrong!")
    }
  }

  change(inputPassword: string) {
    this.verifiedPassword = inputPassword
  }


  resetPassword() {
    let body = this.formGroup.value
    this._apiService.put('user/update', body).subscribe((response) => {
      let obj = response as APIResponse
      console.log("Data from server", obj)
      if (obj.status) {
        alert(obj.message)
        this._router.navigateByUrl('')
      }
      else {
          alert(obj.message)        
      }
    })

  }









}
