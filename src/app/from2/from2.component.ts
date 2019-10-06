import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from2',
  templateUrl: './from2.component.html',
  styleUrls: ['./from2.component.css']
})
export class From2Component implements OnInit {
  employee = {
    fullname: null,
    salary: null,
    gender: 'Nam',
    rate: 0
  };
  list = [
    {
      age: 'Dưới 25 tuổi',
      rate: 0.07,
    },
    {
      age: 'Từ 25 đến 40 tuổi',
      rate: 0.1,
    },
    {
      age: 'Trên 40 tuổi',
      rate: 0.15,
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  TinhThuong() {
    let s = this.employee.rate * this.employee.salary;
    if (this.employee.gender == "Nu")
      s = s + 200000
    return s;
  }
}
