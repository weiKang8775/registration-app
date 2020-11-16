import { Course } from './course.model';
import { LectureOffering } from './lecture-offering.model';
import { TutorialOffering } from './tutorial-offering.model';

export class CourseOffering extends Course{
  constructor(name: string, description: string, preReq: Course[], public tutorialOfferings: TutorialOffering[], public lectureOfferings: LectureOffering[]) {
    super(name, description, preReq);
  }
}