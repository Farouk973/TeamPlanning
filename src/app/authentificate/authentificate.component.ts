import { Component, Inject, OnInit } from '@angular/core';

import { OidcSecurityService } from 'angular-auth-oidc-client';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-authentificate',
  templateUrl: './authentificate.component.html',
  styleUrls: ['./authentificate.component.css']
})
export class AuthentificateComponent implements OnInit {



  constructor(public oidcSecurityService: OidcSecurityService)
   { }

  ngOnInit(): void {

  }
  login(): void {
    this.oidcSecurityService.authorize();
  }
  logout(): void {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }

}
