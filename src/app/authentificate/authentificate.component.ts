import { Component, Inject, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-authentificate',
  templateUrl: './authentificate.component.html',
  styleUrls: ['./authentificate.component.css']
})
export class AuthentificateComponent implements OnInit {
  isCollapsed = true;

  constructor(public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    ) { }

  ngOnInit(): void {
  }
  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }
  logout(): void {
    this.auth.logout({ logoutParams: {
      returnTo: this.doc.location.origin
    } });
  }

}
