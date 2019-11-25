import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { formatTime } from "../../services/formatTime"
import { FormsModule } from '@angular/forms';

import { subjects } from '../../subjects'
import { ADBS } from "../../Quizs/ADBS"
import { ADAV } from "../../Quizs/ADAV"
import { ADTE } from "../../Quizs/ADTE"
import { ADUI } from "../../Quizs/ADUI"
import { ASNE } from "../../Quizs/ASNE"
import { CLCO } from "../../Quizs/CLCO"
import { DBAV } from "../../Quizs/DBAV"
import { DBBS } from "../../Quizs/DBBS"
import { GAME } from "../../Quizs/GAME"
import { HTCS } from "../../Quizs/HTCS"
import { INMA } from "../../Quizs/INMA"
import { JAAV } from "../../Quizs/JAAV"
import { JABS } from "../../Quizs/JABS"
import { JSPR } from "../../Quizs/JSPR"
import { LAYO } from "../../Quizs/LAYO"
import { MOWE } from "../../Quizs/MOWE"
import { PHPP } from "../../Quizs/PHPP"
import { PMAG } from "../../Quizs/PMAG"
import { VBPR } from "../../Quizs/VBPR"
import { WEBU } from "../../Quizs/WEBU"
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatCheckboxModule,
  MatListModule,
  MatCardModule
} from '@angular/material';

@Component({
  selector: 'app-assignmentthitn',
  templateUrl: './assignmentthitn.component.html',
  styleUrls: ['./assignmentthitn.component.css']
})
export class AssignmentthitnComponent implements OnInit {
  // constructor(private title: Title, private route: ActivatedRoute, private location: Location, private _router: Router) {
  //   title.setTitle("Test")
  // }
  //   a
  //   tam
  //   giatri
  //   tong = 0;
  //   socaudung = 0;
  //   socausai = 0;
  listChoose = []
  listSubjects = []
  // config: any
  // list: any


  changed(choose, index) {
    this.listChoose[index] = choose
  }
  sub
  id
  time = 30 * 30
  // Format: hh:mm:ss
  format(time) {
    return formatTime(time)
  }

  //   submit() {
  //     let mark = 0
  //     for (let i = 0; i < this.listSubjects.length; i++) {

  //       if ((this.listChoose[i] > 0) && (this.listSubjects[i].Answers[this.listChoose[i] - 1].Id === this.listSubjects[i].AnswerId))
  //         ++mark;
  //     }

  //     console.log("mark:", mark)
  //   }

  //   onGetFirstPage() {
  //     this.config = { ...this.config, currentPage: 1 }
  //   }

  //   onPrevPage() {
  //     if (this.config.currentPage > 1)
  //       this.config = { ...this.config, currentPage: --this.config.currentPage }
  //   }
  //   onNextPage() {
  //     if (this.config.currentPage < (this.config.totalItems / this.config.itemsPerPage))
  //       this.config = { ...this.config, currentPage: ++this.config.currentPage }
  //   }

  //   onGetLastPage() {
  //     this.config = { ...this.config, currentPage: (this.config.totalItems / this.config.itemsPerPage) }
  //   }

  //   ceil(number) {
  //     return Math.ceil(number)
  //   }
  //   onsubmit() {
  //     this.a = !this.a;
  //     this.tam = 1;
  //     console.log(this.tam);
  //     const copy = [];
  //     const copydapan = [];
  //     const copydung = [];
  //     let count = 0;
  //     this.listSubjects.forEach(function (element) {

  //       console.log(element.Value);
  //       copy.push(element.Answers);
  //     });
  //     this.list = copy;
  //     console.log("tong" + count);
  //     console.log("dapan" + copydapan);
  //     console.log("dung" + copydung);
  //   }
  //   ngOnInit() {
  //     // Get id from url
  //     this.route.paramMap.subscribe(params => {
  //       let id = params.get('id').toLocaleUpperCase()
  //       this.sub = subjects.filter(subject => {
  //         return subject.id === id
  //       })[0]

  //       switch (id) {
  //         case "ADAV": this.listSubjects = [...ADAV]
  //           break

  //         case "ADBS": this.listSubjects = [...ADBS]
  //           break

  //         case "ADTE": this.listSubjects = [...ADTE]
  //           break

  //         case "ADUI": this.listSubjects = [...ADUI]
  //           break

  //         case "ASNE": this.listSubjects = [...ASNE]
  //           break

  //         case "CLCO": this.listSubjects = [...CLCO]
  //           break

  //         case "DBAV": this.listSubjects = [...DBAV]
  //           break

  //         case "DBBS": this.listSubjects = [...DBBS]
  //           break

  //         case "GAME": this.listSubjects = [...GAME]
  //           break

  //         case "HTCS": this.listSubjects = [...HTCS]
  //           break

  //         case "INMA": this.listSubjects = [...INMA]
  //           break

  //         case "JAAV": this.listSubjects = [...JAAV]
  //           break

  //         case "JABS": this.listSubjects = [...JABS]
  //           break

  //         case "JSPR": this.listSubjects = [...JSPR]
  //           break

  //         case "LAYO": this.listSubjects = [...LAYO]
  //           break

  //         case "MOWE": this.listSubjects = [...MOWE]
  //           break

  //         case "PHPP": this.listSubjects = [...PHPP]
  //           break

  //         case "PMAG": this.listSubjects = [...PMAG]
  //           break

  //         case "VBPR": this.listSubjects = [...VBPR]
  //           break

  //         case "WEBU": this.listSubjects = [...WEBU]
  //           break
  //         default: this._router.navigate(["/"])
  //       }

  //     })

  // this.config = {
  //   itemsPerPage: 1,
  //   currentPage: 1,
  //   totalItems: this.listSubjects.length
  // };



  // this.listChoose = this.listSubjects.map((subjects) => {
  //   return 0
  // })

  // decrease seconds
  // setInterval(() => {
  //   --this.time
  // }, 1000)
  //   }


  // }
  ;

  constructor() {
    this.tong = Math.ceil(this.question.length / this.itempage);

  }
  ngOnInit() {
    setTimeout(function () { window.location.href = '../trangchu/trangchu.component.html'; }, 1000 * 3600 * 2);
    const copy = [];

    this.question.forEach(function (element) {

      copy.push(element.valuetrue);
    });

    this.list = copy;
    setInterval(() => {
      --this.time;
    }, 1000);
  }
  title = 'lab4';
  itempage = 1;
  hiden = false;
  back = 'Xem lại câu trả lời ';
  nopbai = 'Nộp Bài'
  tong: number;
  socausai: number;
  p: number = 1;
  complete: number;
  nameno = "name";
  //count :number = 10;
  color = '';
  dis = false;
  list: any[];
  anvinhvien = false;
  colorfalse = '';
  colortrue = '';
  a = 'a';
  b = 'b';
  c = 'c';
  d = 'd';

  question = [
    {
      "stt": 1,
      "debai": 'Có mấy cách sử dụng css cho web?".',
      "cauhoi": '.... "Css";',
      "a": "Có 3 cách: inline, embedded và linked",
      "b": "Có 4 cách: inline, embedded, linked và css riêng",
      "c": "Có 1 cách: inline",
      "d": "Có 2 cách: inline và embedded",
      "value": '9',
      "valuetrue": 'a'

    },
    {
      "stt": 2,
      "debai": 'Thẻ dòng (inline) có thể chứa thẻ khối (block)?',
      "cauhoi": '....echo "inline"; ....',
      "a": "<?php && ?>",
      "b": "<-- && -->",
      "c": "< && >",
      "d": "**",
      "value": '9',
      "valuetrue": 'a'
    },
    {
      "stt": 3,
      "debai": 'Nội dung của trang web nằm trong thẻ nào?.',
      "cauhoi": 'What does PHP stand for?',
      "a": "Thẻ body",
      "b": "Thẻ title",
      "c": "Thẻ style",
      "d": "Thẻ head",
      "value": '9',
      "valuetrue": 'd'

    },
    {
      "stt": 4,
      "debai": 'Ký tự \"\u0026lt;\" được sử dụng để làm gì trong XHTML?.',
      "cauhoi": 'How do you write "Hello World" in PHP',
      "a": "Đại diện cho ký tự \u003c được hiển thị trên màn hình",
      "b": 'Đại diện cho ký tự (©) được hiển thị trên màn hình',
      "c": 'Chỉ là các ký tự bình thường',
      "d": "Đại diện cho ký tự ® được hiển thị trên màn hình",
      "value": '9',
      "valuetrue": 'c'

    },
    {
      "stt": 5,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'The PHP syntax is most similar to:',
      "a": "#banner #logo{color:#F00;}",
      "b": "#header .banner p{color:#F00;}",
      "c": "#banner p{color:#F00;}",
      "d": "#header #banner p{color:#F00;}",
      "value": '9',
      "valuetrue": 'a'

    },
    {
      "stt": 6,
      "debai": 'Để mỗi khi click chuột vào ô textbox, màu nền ô đó chuyển sang màu đỏ thì lệnh CSS tác dụng lên thẻ \u003cinput type=\"text\" name=\"user\" /\u003e  được viết là:',
      "cauhoi": 'How do you get information from a form that is submitted using the "get" method?',
      "a": "input:befor{background-color:red}",
      "b": "input:after{background-color:red}",
      "c": "input:active{background-color:red}",
      "d": "input:focus{background-color:red}",
      "value": '9',
      "valuetrue": 'b'

    },
    {
      "stt": 7,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'When using the POST method, variables are displayed in the URL:',
      "a": "True",
      "b": "False",
      "c": "No",
      "d": "Yes",
      "value": '9',
      "valuetrue": 'b'

    },
    {
      "stt": 8,
      "debai": 'Phạm vi áp dụng cho kiểu tạo CSS dạng Linked style?',
      "cauhoi": 'In PHP you can use both single quotes ( "" ) and double quotes ( " " ) for strings:',
      "a": "Áp dụng cho toàn bộ website (nhiều trang khác nhau)",
      "b": "Áp dụng chỉ 1 trang",
      "c": "Áp dụng tối đa 5 trang",
      "d": "Áp dụng tối đa 10 trang",
      "value": '9',
      "valuetrue": 'a'
    },
    {
      "stt": 9,
      "debai": 'Với lệnh CSS: .title_top{color:red} #new_top {color:green} Áp dụng cho đoạn mã XHTML dưới đây, style sẽ hiển thị như thế nào? \u003cp class=\"title_top\" id=\"new_top\"\u003eTái đề xuất xây dựng đường sắt cao tốc Bắc - Nam\u003c/p\u003e',
      "cauhoi": 'PHP server scripts are surrounded by delimiters, which?',
      "a": "Báo lỗi vì viết lệnh sai",
      "b": "Nội dung trong thẻ p màu xanh lá cây",
      "c": "Nội dung trong thẻ p màu đen mặc định",
      "d": "Nội dung trong thẻ p màu đỏ",
      "value": '9',
      "valuetrue": 'd'

    },
    {
      "stt": 10,
      "debai": 'Với lệnh CSS là p span{color:blue;}áp dụng cho đoạn mã XHTML dưới đây, style sẽ hiển thị: \u003cdiv class=\"new\"\u003e      \u003cp class=\"title\"\u003eHàng trăm người chặn \u003cspan\u003e quốc lộ 1A\u003c/span\u003e\u003c/p\u003e      \u003cp class=\"content\"\u003eThấy \u003cspan\u003etàu quốc tế \u003c/span\u003e đến, doanh nghiệp lạ',
      "cauhoi": 'All variables in PHP start with which symbol?";',
      "a": "Đoạn văn bản \"quốc lộ 1A\" có màu xanh nước biển",
      "b": "Đoạn văn bản \"tàu quốc tế\" có màu xanh nước biển",
      "c": "Tất cả văn bản nằm trong thẻ span có màu xanh nước biển",
      "d": "Tất cả văn bản đều có màu xanh nước biển",
      "value": '9',
      "valuetrue": 'b'

    },

  ];


  next() {
    if (this.p < this.question.length)
      this.p++;
  }
  Previous() {
    if (this.p > 0)
      this.p--;
  }
  dau() {
    this.p = 1;
  }
  cuoi() {
    this.p = this.tong;
  }
  locdulieu(a: string) {
    this.nameno = a;
  }
  onSubmit() {
    const copy = [];
    const copyt = [];
    var count = 0;
    var tongdiem = 10;
    var socausai = 0;
    this.question.forEach(function (element) {
      if (element.value == element.valuetrue) {
        count++;
      }
      copy.push(element.value);

      copyt.push(element.valuetrue);
      console.log(element.value);
    });
    this.list = copy;
    this.tong = count;
    socausai = tongdiem - count;
    this.socausai = socausai;
    console.log('tongdiem' + this.tong);
    this.dis = true;
    var ran = 0.1 + Math.random() * (0.9 - 0.1);
    this.complete = (this.tong / this.question.length) * 100;
    this.hiden = !this.hiden;
    this.anvinhvien = true;
    this.nopbai = 'Xem Điểm';
    this.colortrue = '#a4c600';
    this.colorfalse = 'red';
  }
  dapandung(a, b) {//c= radio,b=value,a=valuetrue
    if (b == a) {
      return true;
    } else {
      return false;
    }
  }
  dapansai(a, b, c, d) {
    if (d != a && d != b && d != c) {
      return true;
    }
  }
  lisst(a, b) {
    if (a != b) {
      return true;
    }
  }
}


