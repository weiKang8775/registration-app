export class Course {
  constructor(public name: string, public description: string, public preReq: Course[]) {}
}