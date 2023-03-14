import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    DialogContentComponent,
    CardDialogComponent
  ],
  exports: [
    CardDialogComponent


  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule
  ]
})
export class DialogStepperModule { }
