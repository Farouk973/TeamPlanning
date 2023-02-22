import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppEntryPointModule { }
