import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIResponse } from 'src/app/models/Api-response';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  IDs: any[] = []
  products: any[] = []
  constructor(private _activatedRoute: ActivatedRoute, private _apiService: ApiService) { }

  ngOnInit(): void {

    this._activatedRoute.queryParams.subscribe(params => {
      this.IDs = params['IDs']
      // console.log("params['IDs']", params['IDs']);

      //get products data from api
      for (let id of this.IDs) {
        // console.log(id);

        this._apiService.get('product/edit/' + id).subscribe((response) => {
          let obj = response as APIResponse;
          if (obj.status) {
            this.products.push(obj.Data)
          } else {
            console.log(obj.message);
          }
        })
      }
      console.log("this.products", this.products);
    })




  }

}
