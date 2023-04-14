import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { bigdomain } from '../../models/bigdomain.model';
import { SearchBarCgComponent } from '../search-bar-cg/search-bar-cg.component';

@Component({
  selector: 'app-forum-search',
  templateUrl: './forum-search.component.html',
  styleUrls: ['./forum-search.component.css']
})
export class ForumSearchComponent implements OnInit {

  form: FormGroup;
  i: string;
  treeData: bigdomain[];
  selectedBigDomain:bigdomain
  selectedSubDomain
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<SearchBarCgComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.i = data.i;
    this.treeData = data.treeData;
    this.selectedBigDomain = null;
   }

  ngOnInit() {
    this.form = this.fb.group({
      skillName: [this.i, Validators.required],
      subDomain: ['', Validators.required],
      bigDomain: ['', Validators.required],
    });
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
  onSaveClick(): void {
    if (this.form.valid) {
      const formValue = this.form.value;
      const result = {
        skillName: formValue.skillName,
        subDomain: formValue.subDomain,
        bigDomain: formValue.bigDomain,
      };
      this.dialogRef.close(result);
    }
  }

  get skillName() {
    return this.form.get('skillName');
  }
  get bigDomain() {
    return this.form.get('bigDomain');
  }
  
  get subDomain() {
    return this.form.get('subDomain');
  }
  
  onBigDomainChange(event) {
    this.selectedBigDomain = event.value;
    this.subDomain.setValue('');
  }
  
  onSubDomainChange(event) {
    this.selectedSubDomain = event.value;
  }


}
