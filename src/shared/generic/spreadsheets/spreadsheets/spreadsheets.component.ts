import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {SpreadsheetsService} from "../spreadsheets.service";
import {Location} from "@angular/common";
import {Observable} from "rxjs";
import {Spreadsheets} from "../../models/Spreadsheets.model";


@Component({
  selector: 'app-spreadsheets',
  templateUrl: './spreadsheets.component.html',
  styleUrls: ['./spreadsheets.component.css']
})
export class SpreadsheetsComponent implements  OnChanges {

  @Input() spreadsheets$!:Observable<Spreadsheets> ;
  spreadsheets = new Spreadsheets()
  data = {
    columnHeader: [],
    rowHeader: [],
    reportData: [],
  }
  editMode: boolean[][] = [];
  editModeStyle : boolean = false;
  rowIndex : any
  @Input() chiffrage: boolean ;

  constructor(private http: HttpClient , private spreadsheetsService : SpreadsheetsService , private location : Location) {

  }

  ngOnChanges(changes: SimpleChanges) {

    this.spreadsheets$.subscribe((spreadsheetsData)=>{
      this.spreadsheets= spreadsheetsData;

      const url = this.location.path();
      let id = url.substring(url.lastIndexOf('/') + 1);
      console.log("id",id)

      this.spreadsheetsService.getItem(this.spreadsheets.columnHeaderEndpoint,id).subscribe((data)=>{
        this.data.columnHeader= data.roles.map((t)=>t[this.spreadsheets.mappingNameColumnHeader])

      })


      this.spreadsheetsService.getItem(this.spreadsheets.rowHeaderEndpoint,id).subscribe((data)=>{
        this.data.rowHeader= data.features.map((d)=>d[this.spreadsheets.mappingNameRowHeader])
        this.fillMatrixByZero()
      })


    })

  }
  fillMatrixByZero(){
    for (let i = 0; i < this.data.rowHeader.length; i++) {
      let row = [];
      for (let j = 0; j < this.data.columnHeader.length; j++) {
        row.push('0');
      }
      this.data.reportData.push(row);
    }
  }
  toggleEditMode(rowIndex: number) {
    this.editModeStyle = ! this.editModeStyle
    if(!this.editModeStyle){
      if (!this.editMode[rowIndex]) {
        this.editMode[rowIndex] = new Array(this.data.columnHeader.length).fill(false);
        this.editMode[rowIndex].fill(!this.editMode[rowIndex][0]);
        console.log("data",this.data.reportData)
      }

    }

    }


}
