import { CalendarDto } from './CalendarDto';

export class CalendarModel {
  id: string;
  description?: string;
  name: string;
  primary: boolean;
  active: boolean;
  timeZone?: string;
  color?: string;

  constructor(dto: Partial<CalendarDto>, rawModel?: CalendarModel) {
    // rawModel uses for getting data from browser storage. If it provided we need use it
    if (!rawModel) {
      this.id = dto.id || '';
      this.description = dto.description;
      this.name = dto.summary || dto.id || 'No name';
      this.primary = !!dto.primary;
      this.active = !!dto.selected;
      this.timeZone = dto.timeZone;
      this.color = dto.backgroundColor;
    } else {
      this.id = rawModel.id;
      this.description = rawModel.description;
      this.name = rawModel.name;
      this.primary = rawModel.primary;
      this.active = rawModel.active;
      this.timeZone = rawModel.timeZone;
      this.color = rawModel.color;
    }
  }
}
