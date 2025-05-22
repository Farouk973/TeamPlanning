import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

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
