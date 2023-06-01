import { Component, ViewChild } from "@angular/core";
import { Input, OnInit, Output } from '@angular/core';

import moment from "moment";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid
} from "ng-apexcharts";
import { TimeLine } from "../../models/Calendar.model";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { TimeLineDialogComponent } from "./time-line-dialog/time-line-dialog.component";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  @Input() Timeline!: TimeLine;
  events: any[] = [];
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


  constructor(private http: HttpClient, public dialog: MatDialog) {
    console.log(this.Timeline)



  }
  ngOnInit(): void {
    console.log(this.Timeline)
    this.CalendarEvents(
      this.Timeline.startDateCollumn,
      this.Timeline.displaycollumn,
      this.Timeline.endpoint,
      this.Timeline.endDateCollumn,
    )

  }

  CalendarEvents(startDate: string, fieldToDisplay: string, endpoint: string, endDate?: string) {
    this.http.get<any[]>(endpoint).subscribe((data) => {
      console.log(data)
      this.events = data.map((event, i) => (
        {
          id: event.id,
          x: event[fieldToDisplay],
          y: [
            new Date(event[startDate]).getTime(),
            new Date(event[endDate]).getTime()

          ],
          fillColor: this.color[i]
        }

      ));
      this.chartOptions = {
        series: [
          {
            name: "task",
            data: this.events
          },
        ],
        chart: {
          height: 350,
          type: "rangeBar",
          events: {
            click: function (event, chartContext, config) {
              this.openDialog(config.config.series[config.seriesIndex].data[config.dataPointIndex].id);
            }.bind(this),
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false
            }
          }

        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            var label = opts.w.globals.labels[opts.dataPointIndex];
            var a = moment(val[0]);
            var b = moment(val[1]);
            var diff = b.diff(a, "days");
            return label + ": " + diff + (diff > 1 ? " days" : " day");
          },
          style: {
            colors: ["#f3f4f5", "#fff"]
          }
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          show: false
        },

        grid: {
          row: {
            colors: ["#f3f4f5", "#fff"],
            opacity: 1
          }
        },

      };

      console.log(this.chartOptions.series['date'])

    });
  }

  openDialog(data: any): void {
    if(this.Timeline.dialog){
    console.log(data)
    var metadata = this.Timeline.dialog
    const dialogRef = this.dialog.open(TimeLineDialogComponent, {
      width: '895px',
     
      data: { data , metadata },


    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}

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
    '#00838F',
    '#FBC02D',
    '#F9A825',
    '#EA80FC',
    '#7E57C2',
    '#7986CB',
    '#1565C0',
    '#9CCC65',
    '#CE93D8',
    '#B388FF',
    '#2962FF',
    '#2979FF',
    '#1DE9B6',
    '#00E5FF',
    '#00ACC1',
    '#00C853',
    '#FFD54F',
    '#FFF9C4',
    '#FFEA00',
    '#8C9EFF',
    '#B2EBF2',
    '#FFF8E1',
    '#880E4F',
    '#0277BD',
    '#304FFE',
    '#FFF176',
    '#FFA000',
    '#9C27B0',
    '#4A148C',
    '#FFC107',
    '#311B92',
    '#E1F5FE',
    '#F9FBE7',
    '#FFD600',
    '#1E88E5',
    '#E3F2FD',
    '#AA00FF',
    '#FF4081',
    '#3F51B5',
    '#1A237E',
    '#E8EAF6',
    '#64FFDA',
    '#C0CA33',
    '#FFB300',
    '#90CAF9',
    '#B2DFDB',
    '#FFC400',
    '#AB47BC',
    '#82B1FF',
    '#BBDEFB',
    '#3949AB',
    '#F50057',
    '#E0F7FA',
    '#FFEB3B',
    '#FDD835',
    '#FF8F00',
    '#80D8FF',
    '#AFB42B',
    '#B388FF',
    '#FFF59D',
    '#B9F6CA',
    '#E040FB',
    '#0277BD',
    '#00897B',
    '#5C6BC0',
    '#00BFA5',
    '#FFCA28',
    '#81D4FA',
    '#2962FF',
    '#1E88E5',
    '#F1F8E9',
    '#81C784',
    '#7986CB',
    '#311B92',
    '#FFFDE7',
    '#0288D1',
    '#FFF9C4',
    '#01579B',
    '#5E35B1',
    '#F57F17',
    '#01579B',
    '#C5E1A5',
    '#E0F2F1',
    '#00B8D4',
    '#A5D6A7',
    '#9CCC65',
    '#1A237E',
    '#4CAF50',
    '#004D40',
    '#FFEB3B',
    '#C8E6C9',
    '#E1BEE7',
    '#FFD600',
    '#F0F4C3',
    '#00BCD4',
    '#FFD54F',
    '#F3E5F5',
    '#3D5AFE',
  ];
}
