import { Component, OnInit } from '@angular/core';
import { subjects } from "../../subjects"
@Component({
  selector: 'app-assignmentdanhmucmh',
  templateUrl: './assignmentdanhmucmh.component.html',
  styleUrls: ['./assignmentdanhmucmh.component.css']
})
export class AssignmentdanhmucmhComponent implements OnInit {
  constructor() { }
  listSubjects
  ngOnInit() {
    this.listSubjects = [...subjects]
  }

}