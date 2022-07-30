import { CalendarDto, CalendarModel, EventDto, EventModel } from '../models';

class Gapi {
  private URL_CALENDARS =
    'https://www.googleapis.com/calendar/v3/users/me/calendarList';
  private getEventsURL = (calendarId: string) => {
    return `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/?showDeleted=false&`;
  };

  private apiGet = async <T = any>(
    url: string,
    params?: Record<string, any>
  ): Promise<T> => {
    const token = await this.getToken();
    const paramsString = new URLSearchParams(params);
    const reqUrl = params ? url + paramsString : url;

    const res = await fetch(reqUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });

    return await res.json();
  };

  private getToken = (): Promise<string> =>
    new Promise((resolve, reject) => {
      try {
        chrome.identity.getAuthToken({ interactive: true }, (token) => {
          resolve(token);
        });
      } catch (error) {
        reject(error);
      }
    });

  getCalendars = async () => {
    const calendars = await this.apiGet<{ items: CalendarDto[] }>(
      this.URL_CALENDARS
    );

    return calendars.items.map((calendarDto) => new CalendarModel(calendarDto));
  };

  getEvents = async (calendarId = 'primary') => {
    const url = this.getEventsURL(calendarId);
    const data = await this.apiGet<{ items: EventDto[] }>(url, {
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    return data.items.map((eventDto) => new EventModel(eventDto));
  };
}

export const gapi = new Gapi();
