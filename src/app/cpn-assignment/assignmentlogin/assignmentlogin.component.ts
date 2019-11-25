import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignmentlogin',
  templateUrl: './assignmentlogin.component.html',
  styleUrls: ['./assignmentlogin.component.css']
})
export class AssignmentloginComponent implements OnInit {
  eye: string = "fa-eye";
  anhien = true;
  hienan = false;
  showpassword = "password";
  uname = "";
  pass = "";
  an = false;
  id = 1;
  constructor() { }

  ngOnInit() {
  }
  student = [
    {
      "id": 1,
      "name": 'hai',
      "pass": '123'
    },
    {
      "id": 2,
      "name": 'ngochai',
      "pass": '123'
    },
    {
      "id": 3,
      "name": 'truongngochai',
      "pass": '123'
    }
    ,
    {
      "id": 4,
      "name": 'truongngochaipro',
      "pass": '1234'
    }
  ]
  onsubmit(signin) {
    console.log(signin);
  }
  hello() {
    this.anhien = !this.anhien;
    this.hienan = !this.hienan;
    if (this.showpassword == "password") {
      this.showpassword = "text";
    } else {
      this.showpassword = "password";
    }
  }
  dangnhap() {
    var tktrue;
    for (const element of this.student) {
      console.log(element);
      if (this.uname == 'hai' && this.pass == '1234') {
        tktrue = 1;
        console.log(element.name);

        //break;
      } else {
        tktrue = 0;
        //break;
      }
    }
    if (tktrue == 1) {
      alert('Logged in successfully !!!');
      location.href = "/danhmucmh";
    } else {
      alert('Wrong account or password !!!');
    }
  }
}

