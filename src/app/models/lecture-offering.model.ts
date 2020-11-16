import { Date } from './date.model';

export class LectureOffering {
  constructor(public startTime: Date, public endTime: Date, public seats: number, public seatsFilled: number) {}
}