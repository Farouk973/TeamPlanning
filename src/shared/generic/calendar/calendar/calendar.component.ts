import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar } from '../../models/Calendar.model';
import { CalanderService } from '../calander.service';
import { months } from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  cal: CalendarOptions;
  @Input() calendar!: Calendar;
  @Output() date!: any;

  events: any[] = [];
  constructor(private http: HttpClient, private calanderService: CalanderService) {
  }
  ngOnInit(): void {
    this.CalendarEvents(
      this.calendar.startDateCollumn,
      this.calendar.displaycollumn,
      this.calendar.endpoint,
      this.calendar.endDateCollumn,
      this.calendar.eventColors,
      this.calendar.editable
    )

  }


  calendarOptions: CalendarOptions = {
    navLinks: true,

    plugins: [dayGridPlugin, interactionPlugin],
    eventDrop: (info) => {

      // This function is called when an event is dropped on a new date
      info.event.setExtendedProp(this.calendar.startDateCollumn, info.event.start);
      info.event.setExtendedProp(this.calendar.endDateCollumn, info.event.end);
      this.http.put<any[]>(this.calendar.updateendpoint, info.event.extendedProps).subscribe(resp => console.log(resp))
      this.calanderService.lancerAction(null);


    },
    eventResize: (info) => {
      this.calanderService.lancerAction(null);

      info.event.setExtendedProp(this.calendar.startDateCollumn, info.event.start);
      info.event.setExtendedProp(this.calendar.endDateCollumn, info.event.end);
      this.http.put<any[]>(this.calendar.updateendpoint, info.event.extendedProps).subscribe(resp => console.log(resp))

    },
    dateClick: (info) => {
      this.calanderService.lancerAction(info.dateStr);
    },
    select: function (info) {

    },

    customButtons: {
      myCustomButton: {
        text: 'custom!',
        click: function () {

        }
      }
    },

    headerToolbar: {

      left: 'myCustomButton',
      center: 'prev,title,next',
      right: '',


    },
    buttonIcons: {
      prev: 'chevron_right',
      next: 'fa-chevron-right',
    },
    initialView: 'dayGridMonth',
    weekends: false,
    dayMaxEvents: true,

  };
  color = [

    '#5030E5',
    '#FFA500',
    '#8BC48A',
    '#64DD17',
    '#0277BD',
    '#8E24AA',
    '#B39DDB',
    '#0097A7',
    '#C5CAE9',
    '#FF80AB',
    '#F57F17',
    '#4DD0E1',
  ];

  CalendarEvents(startDate: string, fieldToDisplay: string, endpoint: string, endDate?: string, eventColors?: string, editable?: boolean) {
    this.http.get<any[]>(endpoint).subscribe((data) => {
      this.events = data.map((event , i) => (
        {
          extendedProps: event,
          title: event[fieldToDisplay],
          start: event[startDate],
          end: event[endDate],

        }

      ));
      this.calendarOptions.events = this.events

    });
    if (editable) {

      this.calendarOptions.editable = true;
      this.calendarOptions.eventDurationEditable = true;
      this.calendarOptions.selectable = true;
      this.calendarOptions.selectMirror = true;
    }
    else {
      this.calendarOptions.editable = false;
      this.calendarOptions.eventDurationEditable = false;
      this.calendarOptions.selectable = false;
      this.calendarOptions.selectMirror = false;
    }
    this.calendarOptions.eventColor = eventColors;
    this.calendarOptions.eventBackgroundColor = eventColors;
    this.calendarOptions.eventBorderColor = eventColors;
    this.calendarOptions.eventTextColor = darkenColor(this.calendar.eventColors, 0.2);
    this.cal = this.calendarOptions;
  }
}


function darkenColor(color, amount) {
  let r, g, b;

  // Check if the color is in hex or RGB format
  if (color.startsWith("#")) {
    // Parse the hex code into RGB values
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 7), 16);
  } else if (color.startsWith("rgb")) {
    // Parse the RGB values from the string
    const rgbValues = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')')).split(', ');
    r = parseInt(rgbValues[0]);
    g = parseInt(rgbValues[1]);
    b = parseInt(rgbValues[2]);
  } else {
    // Invalid color format
    return color;
  }

  // Darken the color by the specified amount
  r = Math.round(r * (50 - amount));
  g = Math.round(g * (1 - amount));
  b = Math.round(b * (1 - amount));

  // Convert the RGB values back to hex format
  const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  return hex;
}

