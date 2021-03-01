import { PartnerService } from './../../services/partner.service';
import { Partner } from './../../models/partner';
import { APIResponse } from './../../models/Api-response';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this._apiService.get('partner').subscribe((response) => {
      let obj = response as APIResponse
      console.log("partners Retrieved: ", obj)
      if (obj.status) {
        this.partners = obj.Data
      }
      // else {
      //   alert(obj.message)
      // }
    })
    this.isLogged = this._partnerService.isLogged()
  }

  delete(id: any, index: any) {
    console.log("deleted partner :" , id)
    if (confirm("Are you sure you want to delete this partner ?!")) {
      this._apiService.delete(`partner/delete/${id}`).subscribe((response) => {
        let obj = response as APIResponse
        if (obj.status) {
          alert(obj.message)
          console.log(obj.message)
        } else {
          console.log(obj.message)
        }
      });
      this.partners.splice(index, 1);
    }
    else {
      console.log("do nothing")
    }
  
  }

}
