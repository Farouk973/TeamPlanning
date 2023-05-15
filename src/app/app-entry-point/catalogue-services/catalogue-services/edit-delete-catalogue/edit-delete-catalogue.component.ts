import { Component, OnInit, TemplateRef, ViewChild,ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedServices } from 'src/shared/generic/SharedServices.service';
import { CardData } from 'src/shared/generic/list-card/Models/cardModel';
import { categoryData, mockCardData, mockDataTableData } from '../mock-data/data';
import { environment } from "src/environments/environment";
@Component({
  selector: 'app-edit-delete-catalogue',
  templateUrl: './edit-delete-catalogue.component.html',
  styleUrls: ['./edit-delete-catalogue.component.css']
})
export class EditDeleteCatalogueComponent implements OnInit {

 editingCard:any ;
   @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;
 @ViewChild('dialogTemplateDelete') dialogTemplateDelete: TemplateRef<any>;
  requestForm: FormGroup;
   @Input() element?: any;
  @Input() dataSource?:any ;
 


 skillSuggestions: any;
 selectedSkills:any[]=[];
 dataToUpdate:any;
 selectedIds:any[]=[];
card: CardData = mockCardData;
 submitting:boolean=false;
 submited:boolean=false;
 Deleted:boolean=false;
  constructor(public sharedservice:SharedServices,private dialog: MatDialog,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
onEdit(cardId: string) {

   
  
}
saveCard(cardId: string) {
 

  
  this.saveToServer();

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
    this.dataToUpdate = { ...this.requestForm.value , id:this.element.id};
    console.log(this.dataToUpdate )
    this.saveToServer();
    
  }
 openDialogueDelete(){
   const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '500px';
   this.Deleted=true;
   this.dialog.open(this.dialogTemplateDelete);
   console.log(this.element);

  }

  createForm(){

      this.requestForm = this.fb.group({
   
      textbody: [this.element.textbody, Validators.required],
     category: [this.element.category, Validators.required],
      bodyTitle:[this.element.bodyTitle, Validators.required],
      nbhours: [this.element.nbhours, Validators.required],
      nbresources: [this.element.nbresources, Validators.required],
    
    });
  }
private saveToServer(){
    this.sharedservice.updateRow('https://localhost:5001/api/service', this.dataToUpdate).subscribe(
    response => {
       this.submitting= false;
        this.submited=true;
  this.card.endpoint.next(`${environment.baseUrl}/api/service`);
     
    },
    error => {
      console.error('Error updating card:', error);
     
    }
  );
}


 onDelete(cardId: string) {
  
 
    // Make API call to delete the card from the server
    this.sharedservice.deleteCard('https://localhost:5001/api/service', cardId)
      .subscribe(response => {
        // If the delete was successful, remove the card from the list
       
      }, error => {
        // If there was an error, log it and do not remove the card from the list
        console.error('Error deleting card:', error);
      });
  
}
}
