import { Component, OnInit } from '@angular/core';
import { employees } from '../employees'
@Component({
  selector: 'app-bai5',
  templateUrl: './bai5.component.html',
  styleUrls: ['./bai5.component.css']
})
export class Bai5Component implements OnInit {

  listEmployees = employees;
  constructor() { }
  ngOnInit() {
  }

}
