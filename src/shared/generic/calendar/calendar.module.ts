import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalandarDetailsComponent } from './calandar-details/calandar-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { ActionPanelModule } from '../action-panel/action-panel.module';
import { TimeLineComponent } from './time-line/time-line.component';
import ApexCharts from 'apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TimeLineDialogComponent } from './time-line/time-line-dialog/time-line-dialog.component';



@NgModule({
  declarations: [
    CalendarComponent,
    CalandarDetailsComponent,
    TimeLineComponent,
    TimeLineDialogComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FullCalendarModule,
    MatMenuModule,
    ActionPanelModule,
    NgApexchartsModule
    

  ],
  exports: [
    CalendarComponent,
    CalandarDetailsComponent,TimeLineComponent
  ]
})
export class CalendarModule { }
