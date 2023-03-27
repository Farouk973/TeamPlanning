import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';
import { Apiresponse, bigdomain, endpoints } from '../../models/domain.model';
import { HttpClient } from '@angular/common/http';
import { searchmodel } from '../../models/search.model';

@Component({
  selector: 'app-search-bar-cg',
  templateUrl: './search-bar-cg.component.html',
  styleUrls: ['./search-bar-cg.component.css']
})
export class SearchBarCgComponent implements OnInit {
  @Input() Searchmodel!:Observable<searchmodel>;
  
  options = [];
  treeData: bigdomain[] = [];
  searchdata:searchmodel;
  filteredOptions
  formGroup : FormGroup;
  constructor( private fb : FormBuilder,private http: HttpClient){}
  
  ngOnInit(){
    this.initForm();
    this.Searchmodel.subscribe(data =>{this.searchdata=data
    this.http.get<Apiresponse>(data.optionEndpoint).pipe(
      map(data => {
        this.treeData = data.bigdomain;
        let options = [];
        for(let bigdomain of this.treeData) {
          for(let subdomain of bigdomain.subdomain) {
            for(let domain of subdomain.domain) {
              options.push(domain.name);
            }
          }
        }
        return options;
      })
    ).subscribe(filteredOptions => {
      this.options=filteredOptions;
    });})

  }
  

  initForm(){
    this.formGroup = this.fb.group({
      'form' : ['']
    })
    this.formGroup.get('form').valueChanges.pipe(debounceTime(500)).
    subscribe(response => {
      console.log('data is ', response);
      if (response && response.length>0){
        this.filterData(response);
      }else{
        this.filteredOptions=[];
      }
      
    })
  }

  filterData(enteredData){
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }


}
