import { ApiService } from './../../services/api.service';
import { APIResponse } from './../../models/Api-response';
import { WebsiteMessage } from './../../models/websiteMessage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-messages',
  templateUrl: './users-messages.component.html',
  styleUrls: ['./users-messages.component.css']
})
export class UsersMessagesComponent implements OnInit {

  constructor(private _apiService: ApiService) { }
  websiteMessages: WebsiteMessage[] = [];

  ngOnInit(): void {
    // ---- Get Mesaages
    this._apiService.get("message/message").subscribe((response) => {
      let obj = response as APIResponse;
      console.log("Data from server", obj);
      if (obj.status) {
        let messageData = obj.Data
        this.websiteMessages = messageData

        console.log("message retreived is: ", this.websiteMessages)
      }
      else {
        alert(obj.message)
      }
    })
  }

}
