
import { Component, OnInit } from '@angular/core';
import { HttpRepositoryService } from 'src/core/httpRepository.service';
import { CardData } from 'src/shared/generic/list-card/Models/cardModel';
import { categoryData, mockCardData } from './mock-data/data';

@Component({
  selector: 'app-catalogue-services',
  templateUrl: './catalogue-services.component.html',
  styleUrls: ['./catalogue-services.component.css']
})
export class CatalogueServicesComponent implements OnInit {
searchResults: any;
search:string;
private readonly apiUrl = 'api/Service';


categories: CardData[] = categoryData;
card: CardData =mockCardData;
  

handleSearchEvent($event: any) {
throw new Error('Method not implemented.');
}


  constructor(private httpRepository: HttpRepositoryService) { }

  ngOnInit(): void {
  
  }
  onSearch($event: Event) {
    
    }
   

 
  }
  

