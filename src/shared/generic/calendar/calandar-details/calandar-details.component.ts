import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Calendar, CalendarDetails } from '../../models/Calendar.model';
import { HttpClient } from '@angular/common/http';
import { CalanderService } from '../calander.service';
import { Subscription } from 'rxjs';
import { DialogComponent } from '../../nxm-dialog/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-calandar-details',
  templateUrl: './calandar-details.component.html',
  styleUrls: ['./calandar-details.component.css']
})
export class CalandarDetailsComponent implements OnInit {
  @Input() calendar!: CalendarDetails;
  date: any = new Date();
  events: any[] = [];
  private variableSubscription: Subscription;
  datetitle: any;

  constructor(private http: HttpClient, private calanderService: CalanderService ,public dialog: MatDialog
    ) {
    const dateActuelle = new Date();
    this.datetitle = dateActuelle.toDateString()
    let datestring = dateActuelle.toLocaleDateString('fr-FR').replace(/\//g, '-');
    const parts = datestring.split('-');
    const year = parts[2];
    const month = parts[1];
    const day = parts[0];
    this.date = `${year}-${month}-${day}`;
    this.variableSubscription = this.calanderService.variable$.subscribe((variable) => {
      if (variable === null) {
        this.CalendarEvents()
      }
      else {
        this.date = variable;
        this.CalendarEvents()
      }
    });
  }

  ngOnInit(): void {


    this.CalendarEvents()

  }
  CalendarEvents() {
    console.log("calanda: ", this.date)

    this.http.get<any[]>(this.calendar.endpoint + '?date=' + this.date).subscribe((data) => {
      this.events = data;
      console.log(this.events)

    })
  }

  truncateString(str: string): string {
    if (str.length > 25) {
      return str.substring(0, 25) + " ...";
    } else {
      return str;
    }
  }


  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1067px',
      height: '519px',
      data: { metaData:this.calendar.addForm.metaData, isUpdate: false, endpoint:this.calendar.addForm.endpoint,title:this.calendar.addForm.title},


    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}