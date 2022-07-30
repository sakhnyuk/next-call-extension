import { CalendarDto } from './CalendarDto';

export class CalendarModel {
  id: string;
  description?: string;
  name: string;
  primary: boolean;
  active: boolean;
  timeZone?: string;
  color?: string;

  constructor(dto: Partial<CalendarDto>, storageDto?: CalendarModel) {
    // storageDto uses for getting data from browser storage. If it provided we need use it
    if (!storageDto) {
      this.id = dto.id || '';
      this.description = dto.description;
      this.name = dto.summary || dto.id || 'No name';
      this.primary = !!dto.primary;
      this.active = !!dto.selected;
      this.timeZone = dto.timeZone;
      this.color = dto.backgroundColor;
    } else {
      this.id = storageDto.id;
      this.description = storageDto.description;
      this.name = storageDto.name;
      this.primary = storageDto.primary;
      this.active = storageDto.active;
      this.timeZone = storageDto.timeZone;
      this.color = storageDto.color;
    }
  }
}
