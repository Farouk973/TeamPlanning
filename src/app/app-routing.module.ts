import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificateComponent } from "./authentificate/authentificate.component";
import { ProfileComponent } from 'src/app/profile/profile.component';



const routes: Routes = [
  {
    path: '',
    component: AuthentificateComponent,
    pathMatch: 'full',
    
  },
  {
    path: '',
    loadChildren: () => import('./app-entry-point/app-entry-point.module').then(m => m.AppEntryPointModule),
    
  },
  {
    path: 'profile',
    component: ProfileComponent,
    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
