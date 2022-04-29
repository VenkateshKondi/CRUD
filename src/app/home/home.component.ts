import { Component, OnInit } from '@angular/core';

import { UserInfoService } from '../user-info.service';
import { HttpClient  } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'CRUD';
  data: any=[];
  constructor(private _http:HttpClient,private _userInfo:UserInfoService,private _router:Router) { }
  // private _url="./assets/fakeapi.json";
  ngOnInit(): void {
    this.getUsers()
  }
  public userDetails:any;
  getUsers(){
    this._userInfo.getData().subscribe((value:any)=>{
      this.data=value
    })
  }
 
  DeleteUser(i: any){
    if(confirm('Do you want to delete this user?')){
      this.data.splice(i,1);
    }
  } 
  
  editMethod(dt:any){
     this._router.navigate(["/home",dt])
  } 
}
