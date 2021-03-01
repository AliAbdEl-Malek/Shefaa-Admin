import { ApiService } from '../../../services/api.service';
import { APIResponse } from '../../../models/Api-response';
import { environment } from '../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { Admin } from '../../../models/admin';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private _apiService: ApiService, private _router: Router, private _adminService: AdminService, private _formBuilder: FormBuilder, private httpClient: HttpClient) { }
  admin: Admin;
  formGroup: FormGroup;
  selectedFile: any;
  url: any
  isUploadedPhoto: boolean = false;



  ngOnInit(): void {

    let token = this._adminService.getToken()
    console.log("Token is:", token)
    this._apiService.get('admin/get/' + token).subscribe((response) => {
      let obj = response as APIResponse
      console.log("Data from server in update user:", obj)
      if (obj.status) {
        let adminData = obj.Data
        this.admin = adminData
        console.log(this.admin)

      }
    })



    this.formGroup = this._formBuilder.group({
      name: [, [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      email: [, [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(50)]],
      phone: [],
      address: [],
    })
  }

  updateAdmin() {
    let admin = new Admin();
    admin = this.formGroup.value
    // console.log("Form value:", admin)
    this._apiService.put('admin/update/' + this.admin.id, admin).subscribe((response) => {
      let obj = response as APIResponse
      console.log("admin updated:", obj)
      if (obj.status) {
        alert(obj.message)
        this._router.navigateByUrl('admins')
      }
      else {
        alert(obj.message)
      }
    })

    if (this.isUploadedPhoto) {
      this.onUpload()
    }
    this.isUploadedPhoto=false

  }



  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0]
    console.log("selectedFile", this.selectedFile)

    this.processFile(this.selectedFile)
    this.isUploadedPhoto = true

  }



  onUpload() {

    const uploadData = new FormData();
    uploadData.append('photoURL', this.selectedFile, this.selectedFile.name);
    console.log("uploadData", uploadData)
    this.httpClient.post(`${environment.APIURL}/admin/photo/` + this.admin.id, uploadData).subscribe((response) => {
      let obj = response as APIResponse
      console.log("Data after update photo:", obj)
    })


  }



  readFileAsync(file: any) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    })
  }


  async processFile(file: any) {
    try {
      let contentBuffer = await this.readFileAsync(file);
      this.url = contentBuffer
    } catch (err) {
      console.log(err);
    }
  }













}
