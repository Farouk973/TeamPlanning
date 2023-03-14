import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormModule } from '../form/form.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
  declarations: [
    DialogComponent,
    ConfirmationComponent,
    
  ],
  imports: [
    FormModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
    
  ],
  exports :[DialogComponent]
})
export class NXMDialogModule { }
