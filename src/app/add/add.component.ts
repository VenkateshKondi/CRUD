import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
   userDetails:any ={};
  constructor(private _eh:UserInfoService, private _router:Router) { }

  ngOnInit(): void {
  }
  
  addUser() {
    this._eh.userDetails.push(this.userDetails);
    this._router.navigate(['home']);
}
}
