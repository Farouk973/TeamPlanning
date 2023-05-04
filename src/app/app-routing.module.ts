import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificateComponent } from "./authentificate/authentificate.component";
import { ProfileComponent } from 'src/app/app-entry-point/dashboard/profile/profile.component';

const routes: Routes = [
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
