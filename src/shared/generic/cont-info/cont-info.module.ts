import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadTitleComponent } from './head-title/head-title.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    HeadTitleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,

  ],
  exports:[HeadTitleComponent]
})
export class ContInfoModule { }
