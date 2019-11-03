import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
// import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  // hiện thông báo
  //   title = 'Angular 6 Project!';
  //   todaydate;
  //   componentproperty;
  //   constructor(private myservice: MyserviceService) { }
  //   ngOnInit() {
  //      this.todaydate = this.myservice.showTodayDate();
  //   }
  //   onClickSubmit(data) {
  //      alert("Entered Email id : " + data.emailid);
  //   }
  // }
  // lưu tên tài khoản
  //   title = 'Angular 6 Project!';
  //   todaydate;
  //   componentproperty;
  //   emailid;
  //   formdata;
  //   constructor(private myservice: MyserviceService) { }
  //   ngOnInit() {
  //     this.todaydate = this.myservice.showTodayDate();
  //     this.formdata = new FormGroup({
  //       emailid: new FormControl("angular@gmail.com"),
  //       passwd: new FormControl("abcd1234")
  //     });
  //   }
  //   onClickSubmit(data) { this.emailid = data.emailid; }
  // }
  // xác thực tài khoản phải có @ mới hiện ra nút log in
  //   title = 'Angular 6 Project!';
  //   todaydate;
  //   componentproperty;
  //   emailid;
  //   formdata;
  //   ngOnInit() {
  //     this.formdata = new FormGroup({
  //       emailid: new FormControl("", Validators.compose([
  //         Validators.required,
  //         Validators.pattern("[^ @]*@[^ @]*")
  //       ])),
  //       passwd: new FormControl("")
  //     });
  //   }
  //   onClickSubmit(data) { this.emailid = data.emailid; }
  // }
  // kiểm tra mật khẩu
  title = 'Angular 6 Project!';
  todaydate;
  componentproperty;
  emailid;
  formdata;
  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { "passwd": true };
    }
  }
  onClickSubmit(data) { this.emailid = data.emailid; }

}