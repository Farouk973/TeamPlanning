import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-view-resources',
  templateUrl: './view-resources.component.html',
  styleUrls: ['./view-resources.component.css']
})
export class ViewResourcesComponent implements OnInit {
  @Input() element?: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToComponent(element: any): void {
    const queryParams = { element: JSON.stringify(element.id) };
    const navigationExtras: NavigationExtras = { queryParams };
    this.router.navigate(['/schedule/resources'], navigationExtras);
  }

}
