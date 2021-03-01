import { AdminService } from '../../../services/admin.service';
import { APIResponse } from './../../../models/Api-response';
import { Admin } from '../../../models/admin';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder, private _apiService:ApiService , private _router: Router, private _adminService:AdminService) { }

  formGroup:FormGroup;
  // isRemembered:boolean=false;
  loggedAdmin:Admin[]=[]
  emailValue:string ="";
  // passwordValue:string;

  ngOnInit(): void {
    if(this._adminService.isLogged()){
      alert("You are already logged in ")
      // console.log("Logged is: ",this._adminService.getLoggedStatus())
      this._router.navigateByUrl('')
    }
    // console.log("Email value: ",this.emailValue)
    // console.log("Logged admin:", this.loggedAdmin)
    // console.log("is remembered", this.isRemembered)

    this.formGroup = this._formBuilder.group({
      email:['',[Validators.required, Validators.email,Validators.minLength(10), Validators.maxLength(50)]],
      password:['',[Validators.required]],
    })
  }



  login(){
    let admin = new Admin();
    admin = this.formGroup.value

    //connect to database and find admin
    this._apiService.post("admin/login",admin).subscribe((response)=>{
      let obj = response as APIResponse
      console.log("Data from server",obj)
      if(obj.status){
        this.loggedAdmin.push(obj.Data)

        //remember me 
        // if(this.isRemembered){
        //   this.emailValue = this.loggedAdmin[0].email
        // }else{
        //   this.emailValue =""
        // }

        // set token in lacal storage
        console.log(obj.token)
        this._adminService.addToken(obj.token)
        
        this._router.navigateByUrl('')
        console.log("admin stored in array",this.loggedAdmin)

      }else{
        alert(obj.message)

      }

    })
  }



  // isChecked(status:boolean){
  //  this.isRemembered = status;
  //   // console.log(this.isRemembered)
  // }




}
