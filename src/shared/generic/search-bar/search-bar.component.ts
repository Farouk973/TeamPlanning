import { Component, EventEmitter, Output } from '@angular/core';
import { SharedServices } from '../SharedServices.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {
  searchTerm: string;
  @Output() searchEvent = new EventEmitter<any>();

  constructor(private sharedService: SharedServices) {}

  search() {
    this.sharedService.search(this.searchTerm).subscribe((results) => {
      this.searchEvent.emit(results);
    }, (error) => {
      console.error(error);
      // handle error
    });
  }
}
