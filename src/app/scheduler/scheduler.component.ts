import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { SchoolYear } from '../models/school-year.model';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  courses: Course[] = [
    new Course("ENSF 480", "Principles of Software Design", null),
    new Course("ENGG 209", "Engineering Economics", null),
  ]
  schoolYears: SchoolYear[] = [
    new SchoolYear("2019/2020", this.courses),
    new SchoolYear("2020/2021", this.courses),
    new SchoolYear("2021/2020", null)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
