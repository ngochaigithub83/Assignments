import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {

  students = [
    {
      fullname: 'Trương Ngọc Hải ',
      birthday: '28/10/2000',
      gender: 'Nam',
      photo: '../assets/images/hai1.jpg',
      mark: 10
    },
    {
      fullname: 'Phan Thị Nở ',
      birthday: '20-12-1999',
      gender: 'Nữ',
      photo: '../assets/images/hai2.jpg',
      mark: 8.5
    },
    {
      fullname: 'Nguyễn Khá Bảnh ',
      birthday: '20-01-1999',
      gender: 'Nam',
      photo: '../assets/images/hai3.jpg',
      mark: 8.5
    },
  ]
  constructor() { }

  ngOnInit() {
  }


}
