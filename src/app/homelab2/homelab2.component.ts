import { Component, OnInit } from '@angular/core';
import { students } from '../students'
@Component({
  selector: 'app-homelab2',
  templateUrl: './homelab2.component.html',
  styleUrls: ['./homelab2.component.css']
})
export class Homelab2Component implements OnInit {
  config: any;
  constructor() {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.listStudents.length
    };

  }


  pageChanged(event) {
    this.config.currentPage = event;
  }
  searchText
  listStudents = []
  onDeleteStudent(id) {
    let isDelete = confirm("Are you sure delete this student?")
    if (isDelete) {
      let temp = this.listStudents.filter(student => {
        return student.id !== id
      })
      this.listStudents = [...temp]
    }
  }

  pageOfItems: Array<any>;
  ngOnInit() {
    this.listStudents = students.map((student, i) => (student));
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    pageOfItems = pageOfItems;
  }

}