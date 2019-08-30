import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {
  constructor() { }
  student = {
    name: "Trương Ngọc Hải",
    birthday: "28/10/2000",
    gender: "Male",
    photo: "./assets/images/hai1.jpg",
    mark: 10
  }
  ngOnInit() {
  }

}
