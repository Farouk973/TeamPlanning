
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HttpRepositoryService } from 'src/core/httpRepository.service';
import { CardData } from 'src/shared/generic/generic_card/Models/cardModel';
import {cards} from './cards'
import { mockCardData } from './mock-data/data';

@Component({
  selector: 'app-catalogue-services',
  templateUrl: './catalogue-services.component.html',
  styleUrls: ['./catalogue-services.component.css']
})
export class CatalogueServicesComponent implements OnInit {
searchResults: any;
search:string;
private readonly apiUrl = 'api/Service';

  cardDataList: CardData[];
  cardDataMock: CardData=mockCardData;
 
  
;
handleSearchEvent($event: any) {
throw new Error('Method not implemented.');
}


  constructor(private httpRepository: HttpRepositoryService) { }

  ngOnInit(): void {
   this.retrieveData();
  }
  onSearch($event: Event) {
    
    }
   

  getData(){
    const params = new HttpParams().set('parameterValue', 1);
    return this.httpRepository.get<CardData[]>(this.apiUrl, params);
  }
  retrieveData(): void {
    this.getData().subscribe((data: CardData[]) => {
      this.cardDataList = data.map((cardData: CardData) => {
        return { ...cardData, ...this.cardDataMock };
      });
      
    });
  }
  }
  

