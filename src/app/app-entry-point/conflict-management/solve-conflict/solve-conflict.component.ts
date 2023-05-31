import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/shared/models/user.model';

@Component({
  selector: 'app-solve-conflict',
  templateUrl: './solve-conflict.component.html',
  styleUrls: ['./solve-conflict.component.css']
})
export class SolveConflictComponent implements OnInit {
  selectedUser: string;
  Userconflict
  constructor(
    public dialogRef: MatDialogRef<SolveConflictComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { Userconflict: User, taskId: string ,availableUsers: User[]}
  ) {
    this.Userconflict=data.Userconflict
  }
  ngOnInit(): void {
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
  onReplaceClick(): void {
    this.dialogRef.close(this.selectedUser);
  }

}
