import { Component, OnInit, TemplateRef, ViewChild,ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-workflow',
  templateUrl: './edit-workflow.component.html',
  styleUrls: ['./edit-workflow.component.css']
})
export class EditWorkflowComponent implements OnInit {
  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;
  requestForm: FormGroup;
   @Input() element?: any;
  @Input() dataSource?:any ;

  @Input() selectedRows?: any[];
  constructor(private dialog: MatDialog,private fb: FormBuilder) { }

  ngOnInit(): void {
this.createForm();
  }
openDialogue(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';

    this.dialog.open(this.dialogTemplate);
      console.log(this.element)
  }
    onSubmit() {
    // Handle form submission here
    console.log(this.requestForm.value);
    event.preventDefault();
  }
  createForm(){

      this.requestForm = this.fb.group({
      Name: [this.element.name, Validators.required],
      description: [this.element.description, Validators.required],
      skills: ['', Validators.required],
      
      startDate: [this.element.startDate, Validators.required],
      endDate: ['', Validators.required],
      tasks: ['', Validators.required],
    });
  }
}
