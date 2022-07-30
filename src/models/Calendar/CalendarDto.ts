export interface CalendarDto {
  /**
   * The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:
   * - "freeBusyReader" - Provides read access to free/busy information.
   * - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
   * - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
   * - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
   */
  accessRole?: string;
  /**
   * The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.
   */
  backgroundColor?: string;
  /**
   * The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.
   */
  colorId?: string;
  /**
   * Conferencing properties for this calendar, for example what types of conferences are allowed.
   */
  conferenceProperties?: Schema$ConferenceProperties;
  /**
   * The default reminders that the authenticated user has for this calendar.
   */
  defaultReminders?: Schema$EventReminder[];
  /**
   * Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.
   */
  deleted?: boolean;
  /**
   * Description of the calendar. Optional. Read-only.
   */
  description?: string;
  /**
   * ETag of the resource.
   */
  etag?: string;
  /**
   * The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.
   */
  foregroundColor?: string;
  /**
   * Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is hidden, in which case the value is true.
   */
  hidden?: boolean;
  /**
   * Identifier of the calendar.
   */
  id?: string;
  /**
   * Type of the resource ("calendar#calendarListEntry").
   */
  kind?: string;
  /**
   * Geographic location of the calendar as free-form text. Optional. Read-only.
   */
  location?: string;
  /**
   * The notifications that the authenticated user is receiving for this calendar.
   */
  notificationSettings?: {
    notifications?: Schema$CalendarNotification[];
  };
  /**
   * Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.
   */
  primary?: boolean;
  /**
   * Whether the calendar content shows up in the calendar UI. Optional. The default is False.
   */
  selected?: boolean;
  /**
   * Title of the calendar. Read-only.
   */
  summary?: string;
  /**
   * The summary that the authenticated user has set for this calendar. Optional.
   */
  summaryOverride?: string;
  /**
   * The time zone of the calendar. Optional. Read-only.
   */
  timeZone?: string;
}

interface Schema$ConferenceProperties {
  /**
   * The types of conference solutions that are supported for this calendar.
   * The possible values are:
   * - "eventHangout"
   * - "eventNamedHangout"
   * - "hangoutsMeet"  Optional.
   */
  allowedConferenceSolutionTypes?: string[];
}

interface Schema$EventReminder {
  /**
   * The method used by this reminder. Possible values are:
   * - "email" - Reminders are sent via email.
   * - "popup" - Reminders are sent via a UI popup.
   * Required when adding a reminder.
   */
  method?: string;
  /**
   * Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
   * Required when adding a reminder.
   */
  minutes?: number;
}

export interface Schema$CalendarNotification {
  /**
   * The method used to deliver the notification. The possible value is:
   * - "email" - Notifications are sent via email.
   * Required when adding a notification.
   */
  method?: string;
  /**
   * The type of notification. Possible values are:
   * - "eventCreation" - Notification sent when a new event is put on the calendar.
   * - "eventChange" - Notification sent when an event is changed.
   * - "eventCancellation" - Notification sent when an event is cancelled.
   * - "eventResponse" - Notification sent when an attendee responds to the event invitation.
   * - "agenda" - An agenda with the events of the day (sent out in the morning).
   * Required when adding a notification.
   */
  type?: string;
}
