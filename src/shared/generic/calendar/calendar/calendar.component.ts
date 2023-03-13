import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  events: CalendarEvent[] = [
    { title: 'Event 1', date: new Date('2023-03-01') },
    { title: 'Event 2', date: new Date('2023-03-05') },
    { title: 'Event 3', date: new Date('2023-03-10') }
  ];

  selectedDate: Date;

  addEvent(): void {
    this.events.push({ title: 'New Event', date: this.selectedDate });
    this.selectedDate = null;
  }

  dateClass(date: Date): string {
    const event = this.events.find(e => e.date.toDateString() === date.toDateString());
    return event ? 'has-events' : '';
  }
}
export interface CalendarEvent {
  title: string;
  date: Date;
}