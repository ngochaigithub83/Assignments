import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  hcn = {
    cd: null,
    cr: null,
    dt: null,
    cv: null,
  }

  luong = {
    l: null,
    dt: null,
    tt: null,
    gt: null,
  }
  constructor() { }

  ngOnInit() {
  }

 
  tienthuong() {


    if (this.luong.dt <= 25) {
      this.luong.tt = (this.luong.l) + (this.luong.l * 0.7);

    } else {
      if (this.luong.dt >= 25 && this.luong.dt <= 40) {
        this.luong.tt = (this.luong.l) + (this.luong.l * 0.10)
      } else {
        if (this.luong.dt >= 40)
          this.luong.tt = (this.luong.l) + (this.luong.l * 0.15)

      }
    }
  }




  Tinh() {
    this.hcn.cv = (this.hcn.cd + this.hcn.cr) * 2;
    this.hcn.dt = this.hcn.cd * this.hcn.cr;
  }
}
