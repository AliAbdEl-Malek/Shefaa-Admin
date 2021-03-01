import { APIResponse } from 'src/app/models/Api-response';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { Product } from '../models/Product';
import { ApiService } from './api.service'

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  list: any[] = [];
  fav: Product[] = [];
  user: Admin;

  constructor(private _apiService: ApiService) { }

  addToFavourite(id: any) {
    this._apiService.put(`favourite/add/${id}`, this.list).subscribe((response) => {
      let obj = response as APIResponse
      if (obj.status) {
        console.log(obj.message)
      } else {
        console.log(obj.message)
      }
    });

  }



  getItemsLength() {
    return this.fav.length;
  }

  // clearFavourite() {
  //   this.list = [];
  //   return this.list;
  // }



  deleteFavourite(id: any) {
    this._apiService.put(`favourite/delete/${id}`, this.list).subscribe((response) => {
      let obj = response as APIResponse
      if (obj.status) {
        console.log(obj.message)
      } else {
        console.log(obj.message)
      }
    });
  }


  clearFavourite() {
    this._apiService.put(`favourite/delete`, this.list).subscribe((response) => {
      let obj = response as APIResponse
      if (obj.status) {
        console.log(obj.message)
      } else {
        console.log(obj.message)
      }
    });
  }














}
