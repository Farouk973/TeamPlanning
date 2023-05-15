import { Component, OnInit, TemplateRef, ViewChild,ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataTableGenericInput } from 'src/shared/generic/models/dataTable.model';
import { mockDataTableData } from '../mock-data/data';
import { environment } from "src/environments/environment";
@Component({
  selector: 'app-edit-workflow',
  templateUrl: './edit-workflow.component.html',
  styleUrls: ['./edit-workflow.component.css']
})
export class EditWorkflowComponent implements OnInit {
  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;
 @ViewChild('dialogTemplateDelete') dialogTemplateDelete: TemplateRef<any>;
  requestForm: FormGroup;
   @Input() element?: any;
  @Input() dataSource?:any ;
  mockDataTableGenericData:DataTableGenericInput = mockDataTableData ;
  @Input() selectedRows?: any[];
  constructor(private dialog: MatDialog,private fb: FormBuilder,private http: HttpClient) { }
 skillSuggestions: any;
 selectedSkills:any[]=[];
 dataToUpdate:any;
 selectedIds:any[]=[];
separatorKeysCodes: number[] = [188, 186];
 submitting:boolean=false;
 submited:boolean=false;
 Deleted:boolean=false;
  onSkillsInput() {
    this.http.get(`${environment.baseUrl}/api/Skills/get-skills`).subscribe(suggestions => {
      this.skillSuggestions = suggestions;
    });
  }
  ngOnInit(): void {
this.createForm();
this.onSkillsInput();
 this.Deleted=false;

  }
  onDelete(){
   this.http.delete(`${environment.baseUrl}/api/RequestManagement/${this.element.id}`).subscribe(
  (result) => {
   this.openDialogueDelete();
  },
  (error) => {
    // handle error
  }
);

  }
openDialogue(){  
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
     this.Deleted=false;
    this.submitting = false;
    this.submited = false;
    this.dialog.open(this.dialogTemplate);
      console.log(this.element)
  }
    onSubmit() {
    // Handle form submission here
    console.log(this.requestForm.value);
    this.submitting= true;

    event.preventDefault();
    this.dataToUpdate = { ...this.requestForm.value ,tasksIds:this.element.tasksIds, id:this.element.id};
    console.log(this.dataToUpdate )
    this.http.put(`${environment.baseUrl}/api/RequestManagement`,this.dataToUpdate).subscribe(suggestions => {
      if(suggestions){
       
         this.submitting= false;
        this.submited=true;
       this.mockDataTableGenericData.endpoint.next(`${environment.baseUrl}/api/RequestManagement`);
      }
      
    });
  }
 openDialogueDelete(){
   const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '500px';
   this.Deleted=true;
   this.dialog.open(this.dialogTemplateDelete);
  this.mockDataTableGenericData.endpoint.next(`${environment.baseUrl}/api/RequestManagement`);

  }

  createForm(){

      this.requestForm = this.fb.group({
      Name: [this.element.name, Validators.required],
      description: [this.element.description, Validators.required],
      skills: [ Validators.required],
      
      startDate: [new Date (this.element.startDate), Validators.required],
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
    const skillId  = selectedOption.id;
   
    const value = event.option.viewValue;
    if (value && !this.selectedSkills.includes(value)) {
      this.selectedSkills.push(value);
      this.selectedIds.push(skillId);
    }
    this.requestForm.controls['skills'].setValue('');
    console.log(this.selectedIds);
  }


}
