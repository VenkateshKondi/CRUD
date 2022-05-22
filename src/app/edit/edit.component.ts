import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  userDetails: any;
  apiData: any;
  id: any;
  loading: boolean = true;
 
  constructor(
    private _activatedRoute:ActivatedRoute,
    private _eh: UserInfoService,
    private _router: Router) { }
  ngOnInit(): void {
    // this.id=this._activatedRoute.snapshot.paramMap.get('id')
     this._activatedRoute.params.subscribe((param=>{
       this.id=param['id']
     }))

     
    this._eh.getData().subscribe((data) => {
      this.apiData = data;
      this.userDetails = this.GetById(this.id);
      this.loading = false;
    })
  
  }
  private findIndex = (id: number) =>
this.apiData.findIndex((x: any) => x.id == id);

GetById(id: any) {
const index = this.findIndex(id);
return this.apiData[index];
}

update() {
let index = this.findIndex(this.id);
this._eh.userDetails[index] = this.userDetails;
this._router.navigate(['home',{id:index+1}]);
}
}
