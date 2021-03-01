import { PartnerService } from './../../services/partner.service';
import { Partner } from './../../models/partner';
import { APIResponse } from './../../models/Api-response';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor(private _apiService: ApiService, private _router: Router, private _partnerService: PartnerService) { }
  partners: Partner[] = [];
  isLogged: boolean

  ngOnInit(): void {
    let token = this._partnerService.getToken()
    console.log("Token is:", token)
    // this._apiService.get('partner').subscribe((response) => {
    //   let obj = response as APIResponse
    //   console.log("partners Retrieved: ", obj)
    //   if (obj.status) {
    //     this.partners = obj.Data
    //   }
    //   // else {
    //   //   alert(obj.message)
    //   // }
    // })
    // this.isLogged = this._partnerService.isLogged()
    interval(2000)
    .pipe(
      startWith(0),
      switchMap(() => this._apiService.get('partner'))
    )
    .subscribe((response) => {
        let obj = response as APIResponse
        console.log("partners Retrieved: ", obj)
        if (obj.status) {
          this.partners = obj.Data
        }
        
      })
      this.isLogged = this._partnerService.isLogged()

  }

  Deactivate(id: any, index: any) {
    console.log("Deactivated Partner :" , id)
    if (confirm("Are you sure you want to deactivate this Partner ?!")) {
      this._apiService.userActivation(`partner/deactivate/${id}`).subscribe((response) => {
        let obj = response as APIResponse
        if (obj.status) {
          alert(obj.message)
          console.log(obj.message)
        } else {
          console.log(obj.message)
        }
      });
      // this.users.splice(index, 1);
      // alert(`Partner ${id} Deactivated`)
    }
    else {
      console.log("do nothing")
    }
  
  }

  Activate(id: any, index: any) {
    console.log("Activated user :" , id)
    if (confirm("Are you sure you want to Activate this Partner ?!")) {
      this._apiService.userActivation(`partner/activate/${id}`).subscribe((response) => {
        let obj = response as APIResponse
        if (obj.status) {
          alert(obj.message)
          console.log(obj.message)
        } else {
          console.log(obj.message)
        }
      });
      // this.users.splice(index, 1);
      // alert(`Partner ${id} Activated`)
    }
    else {
      console.log("do nothing")
    }
  
  }

}
