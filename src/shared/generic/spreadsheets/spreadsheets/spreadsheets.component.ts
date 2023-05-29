import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {SpreadsheetsService} from "../spreadsheets.service";
import {Location} from "@angular/common";
import {Observable} from "rxjs";
import {Spreadsheets} from "../../models/Spreadsheets.model";
import {Router} from "@angular/router";

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
  titleProject : string;
  chiffrage : any = [];
  constructor(private http: HttpClient , private spreadsheetsService : SpreadsheetsService , private location : Location , private router : Router) {

  }

  ngOnChanges(changes: SimpleChanges) {


    this.spreadsheets$.subscribe((spreadsheetsData)=>{
      this.spreadsheets= spreadsheetsData;

      const url = this.location.path();
      let id = url.substring(url.lastIndexOf('/') + 1);
      let totlaJ_Cout = ["DAYS" , "COST $"]
      let TJM_DAY = ['TJM $' , 'DAY']
      let TOTAL = ['TOTAL $']

      this.spreadsheetsService.getItem(this.spreadsheets.columnHeaderEndpoint,id).subscribe((data)=>{
        this.data.columnHeader=data.roles.map((t)=>t[this.spreadsheets.mappingNameColumnHeader]).concat(totlaJ_Cout)
        this.titleProject=data.name

      })


      this.spreadsheetsService.getItem(this.spreadsheets.rowHeaderEndpoint,id).subscribe((data)=>{
        this.data.rowHeader= TJM_DAY.concat(data.features.map((d)=>d[this.spreadsheets.mappingNameRowHeader]).concat(TOTAL))
        if(data.costing.map((obj) => Object.values(obj)).length === 0){
          this.fillMatrixByZero()
        }
         else{
          this.Convert_ObjectToMatrix(data);
        }

      })


    })



  }


 async fillMatrixByZero(){
    for (let i = 0; i < this.data.rowHeader.length; i++) {
      let row = [];
      for (let j = 0; j < this.data.columnHeader.length; j++) {
      row.push(0);
      }
      await   this.data.reportData.push(row);
    }
  }


  toggleEditMode(rowIndex: number) {
    this.editModeStyle = ! this.editModeStyle
    if(!this.editModeStyle){
      if (!this.editMode[rowIndex]) {
        this.editMode[rowIndex] = new Array(this.data.columnHeader.length).fill(false);
        this.editMode[rowIndex].fill(!this.editMode[rowIndex][0]);
      }

      this.Total_day();
      this.Costing();
      this.Total_Costing()
      this.Convert_MatrixToObject()
    }

    }

    Total_day()
    {
      for (let i = 2; i < this.data.reportData.length -1; i++) {
        let daySum = 0;
        for (let j = 0; j < this.data.reportData[i].length - 2; j++) {
          daySum += this.data.reportData[i][j];
        }
        this.data.reportData[i][this.data.reportData[i].length - 2] = Number(daySum.toFixed(2)) ;
      }
    }

    Costing(){
      for (let i = 2; i < this.data.reportData.length -1; i++) {
        let costingSum = 0;
        for (let j = 0; j < this.data.reportData[i].length - 2; j++) {
          costingSum += this.data.reportData[i][j] * this.data.reportData[0][j] ;
        }
        this.data.reportData[i][this.data.reportData[i].length - 1] = Number(costingSum.toFixed(2));
      }
    }


    Total_Costing(){
      let sumLastColumn = 0;
      for (let i = 2; i < this.data.reportData.length -1; i++) {
        sumLastColumn += this.data.reportData[i][this.data.reportData[i].length - 1];
      }
        this.data.reportData[this.data.reportData.length-1][this.data.reportData[this.data.reportData.length-1].length - 1] = Number(sumLastColumn.toFixed(2)) ;
    }

    Convert_MatrixToObject(){
      const url = this.location.path();
      let id = url.substring(url.lastIndexOf('/') + 1);
      this.chiffrage = []
      for (let row of this.data.reportData) {
        const obj = {};
        for (let i = 0; i < row.length; i++) {
          obj['Role' + i] = row[i];
        }
        this.chiffrage.push(obj);
      }

      this.spreadsheetsService.addCosting( this.spreadsheets.postEndpoint, id , this.chiffrage ).subscribe( (response)=>
        console.log(response))


    }

async  Convert_ObjectToMatrix(data : any){
    if( data.costing.map((obj) => Object.values(obj)).length != 0
      && data.costing.map((obj) => Object.values(obj))[0].length ===this.data.columnHeader.length
      && data.costing.map((obj) => Object.values(obj)).length === this.data.rowHeader.length
    ){
      this.data.reportData = await data.costing.map((obj) => Object.values(obj))

    }
  }

  dispalyProjects() {
    this.router.navigate(['projects/list-projects'])
  }


}
