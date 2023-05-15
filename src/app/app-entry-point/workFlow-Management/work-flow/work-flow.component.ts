import { Component, OnInit, TemplateRef,ChangeDetectionStrategy, ViewChild ,Input} from '@angular/core';
import { mockDataTableData } from './mock-data/data';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { DataTableGenericInput } from 'src/shared/generic/models/dataTable.model';
import { HttpClient } from '@angular/common/http';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { environment } from "src/environments/environment";
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-work-flow',
  templateUrl: './work-flow.component.html',
  styleUrls: ['./work-flow.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class WorkFlowComponent implements OnInit {
  mockDataTableGenericData:DataTableGenericInput = mockDataTableData ;
   dataToUpdate:any;
  searchForm: FormGroup;
  pagesize: BehaviorSubject<number> = new BehaviorSubject(10);  
  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;
skillSuggestions: any;
 selectedSkills:any[]=[];
 submitting:boolean=false;
 submited:boolean=false;
 selectedIds:any[]=[];
separatorKeysCodes: number[] = [188, 186];
  addRequestForm: FormGroup;
  constructor(private dialog: MatDialog,private fb: FormBuilder,private http: HttpClient) { }
 

  onSkillsInput() {
    this.http.get(`https://localhost:5001/api/Skills/get-skills`).subscribe(suggestions => {
      this.skillSuggestions = suggestions;
      console.log(this.skillSuggestions)
    });
  }
 

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchTerm: ['']
    });
   
    this.searchForm.get('searchTerm').valueChanges.pipe(
      debounceTime(500)
    ).subscribe(() => {
     
      this.search();
    });
    this.onSkillsInput();
    this.createForm();
  }
  search() {
    const searchTerm = this.searchForm.get('searchTerm').value;
   
   
  if (!searchTerm) {
    // if search term is null or empty, reset to initial endpoint
    this.mockDataTableGenericData.endpoint.next("https://localhost:5001/api/RequestManagement");
  } else {
    // if search term is not empty, set endpoint with search term
    this.mockDataTableGenericData.endpoint.next(`https://localhost:5001/api/RequestManagement/search?SearchedWord=${searchTerm}`);
  }
  }
  openDialogue(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    this.submitting = false;
    this.submited = false;
    this.dialog.open(this.dialogTemplate);

  }
  
    onSubmit() {
    // Handle form submission here
    this.submitting= true;
    event.preventDefault();
    this.dataToUpdate = { ...this.addRequestForm.value,skillsIds:this.selectedIds };
    console.log(this.dataToUpdate );
    this.http.post(`https://localhost:5001/api/RequestManagement`,this.dataToUpdate).subscribe(suggestions => {

      if(suggestions){
        this.submitting= false;
        this.submited=true;
       this.mockDataTableGenericData.endpoint.next("https://localhost:5001/api/RequestManagement");
       this.searchForm.get('searchTerm').setValue(this.dataToUpdate.Name);
      }
      
    });
  }
  
  createForm(){

      this.addRequestForm = this.fb.group({
      Name: ['', Validators.required],
      description: ["", Validators.required],
      skills: [ Validators.required],
      
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    
    });
  }

 

  removeSkill(skill: string): void {
    const index = this.selectedSkills.indexOf(skill);
     const selectedOption = this.skillSuggestions.find(option => option.name === skill);
  const skillId = selectedOption.id;
  const indexOfId = this.selectedIds.indexOf(skillId);
    if (index  >= 0 ) {
      this.selectedSkills.splice(index, 1);
      this.selectedIds.splice(indexOfId,1)
      
    }
  }

  selectSkill(event: MatAutocompleteSelectedEvent): void {
    const selectedOption = this.skillSuggestions.find(option => option.name === event.option.value);
    const skillId = selectedOption.id;
 const regex = /^([0-9a-f]{8})([0-9a-f]{6})([0-9a-f]{4})([0-9a-f]{6})$/i;
const matches = selectedOption.id.match(regex);
const timestamp = parseInt(matches[1], 16) * 1000;
const machine = parseInt(matches[2].substring(0, 6), 16);
const pid = Number(matches[2].substring(6, 8));
const increment = parseInt(matches[3], 16);
const creationTime = new Date(timestamp).toISOString();

const obj = {
  Timestamp: timestamp,
  Machine: 0,
  Pid: 0,
  Increment: 0,
  CreationTime: creationTime,
};
    const value = event.option.viewValue;
    if (value && !this.selectedSkills.includes(value)) {
      this.selectedSkills.push(value);
      this.selectedIds.push(obj);

    }
    this.addRequestForm.controls['skills'].setValue('');
    console.log(this.selectedIds);
  }

}
