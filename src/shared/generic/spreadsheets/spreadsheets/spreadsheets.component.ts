import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {SpreadsheetsService} from "../spreadsheets.service";
import {Location} from "@angular/common";
import {Observable, toArray} from "rxjs";
import {Spreadsheets} from "../../models/Spreadsheets.model";
import {Router} from "@angular/router";
import {logExperimentalWarnings} from "@angular-devkit/build-angular/src/builders/browser-esbuild/experimental-warnings";


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
      let totlaJ_Cout = ["TOTAL DAY" , "COSTING"]
      let TJM_DAY = ['TJM £' , 'NUMBER OF DAY']
      let TOTAL = ['TOTAL']



      this.spreadsheetsService.getItem(this.spreadsheets.columnHeaderEndpoint,id).subscribe((data)=>{
        this.data.columnHeader=data.roles.map((t)=>t[this.spreadsheets.mappingNameColumnHeader]).concat(totlaJ_Cout)


        this.titleProject=data.name
        console.log(this.data.columnHeader)

      })


      this.spreadsheetsService.getItem(this.spreadsheets.rowHeaderEndpoint,id).subscribe((data)=>{
        this.data.rowHeader= TJM_DAY.concat(data.features.map((d)=>d[this.spreadsheets.mappingNameRowHeader]).concat(TOTAL))
        this.fillMatrixByZero()
      })


      this.spreadsheetsService.getItem(this.spreadsheets.rowHeaderEndpoint,id).subscribe((data)=>{
        if( data.costing.map((obj) => Object.values(obj)).length != 0){
          this.data.reportData = data.costing.map((obj) => Object.values(obj))

        }

      })
      console.log('datarr',this.data)
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
    if(!this.editModeStyle){
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
      for (let i = 2; i < this.data.reportData.length -1; i++) {
        let sum = 0;
        for (let j = 0; j < this.data.reportData[j].length - 2; j++) {
          sum += this.data.reportData[i][j];
        }
       // data.reportData[i][data.reportData[i].length - 2] = sum;
        console.log("sum", sum)
      }

      this.spreadsheetsService.addCosting('/api/Project/addCostingToProject' , id , this.chiffrage ).subscribe( (response)=>
        console.log(response))



      }



    }


  dispalyProjects() {
    this.router.navigate(['projects/list-projects'])
  }
}
