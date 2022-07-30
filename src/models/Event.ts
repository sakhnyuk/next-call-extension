export interface EventDto {
  id: string;
  title: string;
  description: string;
  date: string;
  calendarLink: string;
  meetingLink: string;
}

export class Event {
  id: string;
  title: string;
  description: string;
  date: string;
  calendarLink: string;
  meetingLink: string;

  constructor(dto: EventDto) {
    this.id = dto.id;
    this.title = dto.title;
    this.description = dto.description;
    this.date = dto.date;
    this.calendarLink = dto.calendarLink;
    this.meetingLink = dto.meetingLink;
  }
}
