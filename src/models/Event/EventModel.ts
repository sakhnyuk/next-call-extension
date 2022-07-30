import { EventDto } from './EventDto';

export class EventModel {
  id: string;
  title: string;
  description: string;
  dateTime: string;
  timeZone: string;
  calendarLink?: string;
  meetingLink?: string;

  constructor(dto: Partial<EventDto>, storageDto?: EventModel) {
    if (!storageDto) {
      this.id = dto.id || '';
      this.title = dto.summary || 'Event';
      this.description = dto.description || '';
      this.dateTime = dto.start?.dateTime || '';
      this.timeZone = dto.start?.timeZone || '';
      this.calendarLink = dto.htmlLink;
      this.meetingLink = dto.hangoutLink;
    } else {
      this.id = storageDto.id;
      this.title = storageDto.title;
      this.description = storageDto.description;
      this.dateTime = storageDto.dateTime;
      this.timeZone = storageDto.timeZone;
      this.calendarLink = storageDto.calendarLink;
      this.meetingLink = storageDto.meetingLink;
    }
  }
}
