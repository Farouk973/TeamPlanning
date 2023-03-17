import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../nxm-dialog/dialog/dialog.component';
import { ColumnMetadata, FormService } from '../form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(
    private formService: FormService,
   // public dialogRef: MatDialogRef<DialogComponent>
  ) {}
  form: FormGroup;
  @Input() metaData: any;
  fields: ColumnMetadata[];
  ngOnInit(): void {
   // console.log(this.metaData.metaData);
    this.formService.getMetadata(this.metaData).subscribe((data) => {
      this.fields = data;
      this.createForm();
    });
  }

  createForm() {
    let formGroup = new FormGroup({});
    for (const field of this.fields) {
      let control = new FormControl('', []);
      let validators = [];
      if (field.type === 'string') {
        if (field.maxLength) {
          validators.push(Validators.maxLength(field.maxLength));
        }
        if (field.minLength) {
          validators.push(Validators.minLength(field.minLength));
        }
        validators.push(Validators.required);
      } else if (field.type === 'number' || field.type === 'integer') {
        if (field.maximum) {
          validators.push(Validators.max(field.maximum));
        }
        if (field.minimum) {
          validators.push(Validators.min(field.minimum));
        }
        if (field.references) {
          validators.push(Validators.required);
        }
      }
      if (validators.length > 0) {
        control.setValidators(Validators.compose(validators));
      }
      if (this.metaData.isUpdate && this.metaData.object.hasOwnProperty(field.name)) {
        control.setValue(this.metaData.object[field.name]); // set the initial value from the data object
      }
      formGroup.addControl(field.name, control);
    }
    this.form = formGroup;
  }
  submitForm() {
    //console.log('test update', this.metaData.metaData);
    //console.log('test endpoint', this.metaData.endpoint);
    if (this.metaData.isUpdate) {
      this.formService
        .updateRow(this.metaData.endpoint, this.form.value)
       /* .subscribe((response) => {
          response ? this.dialogRef.close(this.form.value) : null;
        });*/
    }
    if (!this.metaData.isUpdate) {
    //  console.error('im in ', this.metaData.isUpdate);
      this.formService
        .addRow(this.metaData.endpoint, this.form.value)
        /*.subscribe((response) => {
          response ? this.dialogRef.close(this.form.value) : null;
        });*/

    }
  }
}
