import { AdminService } from './../../../services/admin.service';
import { APIResponse } from './../../../models/Api-response';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private router:Router, private _formBuilder:FormBuilder, private httpClient:HttpClient,private _adminService:AdminService) { }

  formGroup:FormGroup;
  isCodeSent:boolean=false
  email:string
  token:any = this._adminService.getToken()
  code:string
  serverData:APIResponse


  ngOnInit(): void {

    this.formGroup = this._formBuilder.group({
      
      email:['',[Validators.required, Validators.email,Validators.minLength(6), Validators.maxLength(50)]],
      // code:['',Validators.required]
    })

    // console.log(this.formGroup.value)

     

  }


  sendCode(){
    this.email = this.formGroup.value
    // console.log("This.email:", this.email)

    this.httpClient.post('http://localhost:4200/admin/resetCode',this.email,{headers:{'authorization':this.token}}).subscribe((response)=>{
      let obj = response as APIResponse
      console.log("Data from server",obj)
      if(obj.status){
        // console.log(obj.Data)
        this.serverData = obj
      }
    })

    this.isCodeSent = true
  }


  verifyCode(){
    // console.log("code: ",this.code)
    if(this.serverData.Data == this.code){
      alert("Your code is correct, now reset your password")
      this.router.navigateByUrl('registeration/resetPassword')
    }else{
      alert("Some thing is wrong !")
    }
  }


  change(inputCode:string){
    this.code = inputCode
  }


}
