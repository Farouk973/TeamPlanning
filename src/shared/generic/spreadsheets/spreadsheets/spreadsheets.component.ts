import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {SpreadsheetsService} from "../spreadsheets.service";
import {Location} from "@angular/common";


@Component({
  selector: 'app-spreadsheets',
  templateUrl: './spreadsheets.component.html',
  styleUrls: ['./spreadsheets.component.css']
})
export class SpreadsheetsComponent implements OnInit {


  data = {
    columnHeader: [],
    rowHeader: [],
    reportData: [],
  }
  editMode: boolean[][] = [];
  editModeStyle : boolean = false;
  firstRowEditMode : boolean= false;
  features: string[];
  roles: string[];
  @Input() chiffrage: boolean ;
  constructor(private http: HttpClient , private spreadsheetsService : SpreadsheetsService , private location : Location) {

  }

  ngOnInit(): void {



  }

  ngOnChanges(changes: SimpleChanges) {

    const url = this.location.path();
    let id = url.substring(url.lastIndexOf('/') + 1);
    this.spreadsheetsService.getItem('/api/Project/get-project','6437fe577c69a37224949309').subscribe((data)=>{
      this.roles= data.roles.map((t)=>t.title)
      console.log('roles',this.roles)
      this.data.columnHeader=this.roles
    })

    this.spreadsheetsService.getItem('/api/Project/get-project','6437fe577c69a37224949309').subscribe((data)=>{
      this.features= data.features.map((d)=>d.description)
      console.log('features',this.features)
      this.data.rowHeader=   this.features

    })
   this.bb()

  }
  bb(){
    for (let i = 0; i < this.features.length; i++) {
      let row = [];
      for (let j = 0; j < this.roles.length; j++) {
        row.push('0');
      }
      this.data.reportData.push(row);
    }
  }
  toggleEditMode(rowIndex: number) {
    this.editModeStyle = ! this.editModeStyle
    if (!this.editMode[rowIndex]) {
      this.editMode[rowIndex] = new Array(this.data.columnHeader.length).fill(false);
    }
    this.editMode[rowIndex].fill(!this.editMode[rowIndex][0]);
    console.log("data",this.data.reportData)
  }

}
