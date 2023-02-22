import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthentificateComponent} from "./authentificate/authentificate.component";
const routes: Routes = [
 { path: '',component:AuthentificateComponent },

  {
    path: '',
    loadChildren: () => import('./app-entry-point/app-entry-point.module').then(m => m.AppEntryPointModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
