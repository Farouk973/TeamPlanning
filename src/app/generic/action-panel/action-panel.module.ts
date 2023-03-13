import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionPanelComponent } from './action-panel/action-panel.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [ActionPanelComponent],
  imports: [
    CommonModule,MatIconModule,MatButtonModule,MatCardModule,MatListModule
  ],
  exports:[ActionPanelComponent]
})
export class ActionPanelModule { }
