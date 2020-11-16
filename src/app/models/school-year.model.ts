import { Course } from './course.model';

export class SchoolYear {
  constructor(public year: string, public courses: Course[]) {}
}