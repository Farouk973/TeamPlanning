import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {AppEntryPointRoutingModule} from "./app-entry-point-routing.module";
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    TopNavComponent,

  ],
  imports: [
    CommonModule,
    AppEntryPointRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule

  ]
})
export class AppEntryPointModule { }
