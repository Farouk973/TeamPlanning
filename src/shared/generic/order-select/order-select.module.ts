import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSelectComponent } from './order-select/order-select.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    OrderSelectComponent
  ],
  imports: [
    CommonModule, FormsModule, DragDropModule
  ],
  exports: [OrderSelectComponent],

})
export class OrderSelectModule { }
