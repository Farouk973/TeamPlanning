import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppEntryPointModule { }
