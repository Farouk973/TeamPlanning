import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-permission-dialog',
  templateUrl: './add-permission-dialog.component.html',
  styleUrls: ['./add-permission-dialog.component.css']
})
export class AddPermissionDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '1067px',
      height: '519px',
      enterAnimationDuration,
      exitAnimationDuration,
      

    });
  }
  ngOnInit(): void {
  }

}


@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}

