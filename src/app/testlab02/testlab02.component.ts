import { Component, OnInit } from '@angular/core';
import { students } from '../students';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { courses } from '../courses'
import { enrollments } from '../enrollments'

@Component({
  selector: 'app-testlab02',
  templateUrl: './testlab02.component.html',
  styleUrls: ['./testlab02.component.css']
})
export class Testlab02Component implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location) { }

  student
  courses = {}
  enrollments
  listStudents = [...students]
  listCourses = [...courses]
  listEnrollments = [...enrollments]
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = parseInt(params.get('id'))
      if (!id) {
        this.location.replaceState("/student/1")
      }

      this.student = this.listStudents.filter(student => {
        return student.id === id
      })[0]

      this.enrollments = this.listEnrollments.filter(enrollment => {
        return enrollment.studentId === id
      })

      for (let i = 0; i < enrollments.length; i++) {
        this.courses[enrollments[i].courseId] = this.listCourses.filter(course => {
          return course.courseId === enrollments[i].courseId
        })[0]
      }
    })



  }
}