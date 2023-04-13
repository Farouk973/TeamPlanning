import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";


const USER_DATA = [
  {
    name: 'John Smith',
    occupation: 'Advisor',
    dateOfBirth: '1984-05-05',
    age: 36,
  },
  {
    name: 'Muhi Masri',
    occupation: 'Developer',
    dateOfBirth: '1992-02-02',
    age: 28,
  },
  { name: 'Peter Adams', occupation: 'HR', dateOfBirth: '2000-01-01', age: 20 },
  {
    name: 'Lora Bay',
    occupation: 'Marketing',
    dateOfBirth: '1977-03-03',
    age: 43,
  },
];

const COLUMNS_SCHEMA = [
  {
    key: 'name',
    type: 'text',
    label: 'Full Name',
  },
  {
    key: 'occupation',
    type: 'text',
    label: 'Occupation',
  },
  {
    key: 'dateOfBirth',
    type: 'date',
    label: 'Date of Birth',
  },
  {
    key: 'age',
    type: 'number',
    label: 'Age',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

export interface TableData {
  columnHeader: string[];
  rowHeader: string[];
}

const ELEMENT_DATA = [  { c: '1', d: '2', aa: '3' },  { c: '4', d: '5', aa: '6' },];
@Component({
  selector: 'app-spreadsheets',
  templateUrl: './spreadsheets.component.html',
  styleUrls: ['./spreadsheets.component.css']
})
export class SpreadsheetsComponent implements OnInit {

  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;
/*
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;
  features: string[];
  roles: string[];
;*/
  data = {
    columnHeader: ["a","b",'aa'],
    rowHeader: ["c","d","k"],
    reportData: [[1,2,3], [1,2,2],[1,2,4]],
  }



  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
/*    this.http.get('https://localhost:44312/api/Project/get-project/6436a1db5914a251bbba1bbc').subscribe((data:any)=>{
      this.roles= data.roles.map((t)=>t.title)
      console.log('roles',this.roles)
      this.data.columnHeader=this.roles


    })

    this.http.get('https://localhost:44312/api/Project/get-project/6436a1db5914a251bbba1bbc').subscribe((data:any)=>{
      this.features= data.features.map((d)=>d.description)
      console.log('features',this.features)
      this.data.rowHeader=   this.features

    })*/
  }

}
