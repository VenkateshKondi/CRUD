import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  constructor(private httpref : HttpClient) { }
  userDetails = [
    {
      name: 'kondi venkatesh',
      id: 1,
      shortName: 'venki',
      mail:"kondivenkatesh@gmail.com",
      url: 'https://via.placeholder.com/600/92c952',
    },
    {
      name: 'Athapuram  Anilkumar',
      id: 2,
      shortName: 'anil',
      mail: "Athapuramanilkumar@gmail.com",
      url: 'https://via.placeholder.com/600/771796',
    },
    {
      name: 'Arun Paul',
      id: 3,
      shortName: 'arun',
      mail: "Arunpaul@gmail.com",
      url: 'https://via.placeholder.com/600/24f355',
    },
    {
      name: 'Balamani  Krishna',
      id: 4,
      shortName: 'bala',
      mail: "Balamanikrishna@gmail.com",
      url: 'https://via.placeholder.com/600/d32776',
    },
    {
      name: 'Abhijith Reddy',
      id: 5,
      shortName: 'abhijith',
      mail: "Abhijithreddy@gmail.com",
      url: 'https://via.placeholder.com/600/f66b97',
    },
    {
      name: 'Donthiboina Nithya',
      id: 6,
      titshortNamele: 'nithya',
      mail: "Donthiboinanithya@gmail.com",
      url: 'https://via.placeholder.com/600/56a8c2',
      shortName:'internationoal',
    },
    {
      name: 'Gourav Jyoti Kamila',
      id: 7,
      shortName: 'gourav',
      mail: "Gouravkamila@gmail.com",
      url: 'https://via.placeholder.com/600/b0f7cc',
    },
    {
      name: 'Goli Rahul  Reddy',
      id: 8,
      shortName: 'rahul',
      mail: "Rahulreddy@gmail.com",
      url: 'https://via.placeholder.com/600/54176f',
    },
    {
      name: 'Gaddam Kishore Kumar',
      id: 9,
      shortName: 'kishore',
      mail: "Gaddamkishore@gmail.com",
      url: 'https://via.placeholder.com/600/51aa97',
    },
  ];

  getData() {
    return of(this.userDetails);
  }
}


