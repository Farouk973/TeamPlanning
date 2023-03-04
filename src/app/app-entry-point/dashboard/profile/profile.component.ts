import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileJson: string | null = null;

  fileName! : string;
  content! : string;

  constructor(public oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {

  }

  uploadImage($event: Event) {
   const target = $event.target as HTMLInputElement;
   const file: File = (target.files as FileList)[0];
   console.log(file);
  }
}
