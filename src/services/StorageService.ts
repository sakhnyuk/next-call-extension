import { CalendarModel } from '../models';

enum StorageKey {
  CALENDARS = 'CALENDARS',
  EVENTS = 'EVENTS',
}

class StorageService {
  setCalendars = (data: CalendarModel[]): Promise<void> => {
    return chrome.storage.sync.set({ [StorageKey.CALENDARS]: data });
  };

  getCalendars = async (): Promise<CalendarModel[]> => {
    const data = await chrome.storage.sync.get(StorageKey.CALENDARS);
    const rawCalendars = data[StorageKey.CALENDARS];

    return rawCalendars.map(
      (rawData: CalendarModel) => new CalendarModel({}, rawData)
    );
  };
}

export const storageService = new StorageService();
