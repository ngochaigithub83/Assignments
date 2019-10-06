import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from1',
  templateUrl: './from1.component.html',
  styleUrls: ['./from1.component.css']
})
export class From1Component implements OnInit {

  constructor() { }
  diem = {
    c: null,
    hl: null,
  }
  ngOnInit() {
  }
  grade() {
    if (this.diem.c < 5) {
      this.diem.hl = 'chúc mừng bạn đã rớt';
    } else {
      if (this.diem.c >= 5) {
        this.diem.hl = " chúc mừng bạn đã đậu";
      }
    }

  }
}
