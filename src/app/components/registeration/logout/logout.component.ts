import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _adminService:AdminService, private _router:Router) { }

  ngOnInit(): void {
    this._adminService.logout();
    // this._adminService.setLoggedStatus(false)
    this._router.navigateByUrl("");
  }

}
