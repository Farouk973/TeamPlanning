import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();


  constructor(
    private router: Router,
    ) {
 
  }

  ngOnInit() { }

  toggleSidebar() {
    this.sideNavToggled.emit();
  }
  onLoggedout() {
  }

}
