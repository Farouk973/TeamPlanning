import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';
import { Apiresponse, bigdomain, endpoints } from '../../models/domain.model';
import { HttpClient } from '@angular/common/http';
import { searchmodel } from '../../models/search.model';
import { servicechipsservice } from '../../chips-pop-up-gc/servicechips.service';
import { ForumSearchComponent } from '../forum-search/forum-search.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search-bar-cg',
  templateUrl: './search-bar-cg.component.html',
  styleUrls: ['./search-bar-cg.component.css']
})
export class SearchBarCgComponent implements OnInit {
  @Input() Searchmodel!: Observable<searchmodel>;
  @Output() dialogResult = new EventEmitter<any>();
  options = [];
  treeData: bigdomain[] = [];
  searchdata: searchmodel;
  filteredOptions
  formGroup: FormGroup;
  chipadded: bigdomain;
  constructor(private fb: FormBuilder, private http: HttpClient, private eventservice: servicechipsservice,private dialog: MatDialog) { }

  ngOnInit() {
    this.initForm();
    this.Searchmodel.subscribe(data => {
      this.searchdata = data
      this.http.get<Apiresponse>(data.optionEndpoint).pipe(
        map(data => {
          this.treeData = data.bigdomain;
          let options = [];
          for (let bigdomain of this.treeData) {
            for (let subdomain of bigdomain.subdomain) {
              for (let domain of subdomain.domain) {
                options.push(domain.name);
              }
            }
          }
          return options;
        })
      ).subscribe(filteredOptions => {
        this.options = filteredOptions;
      });
    })

  }


  initForm() {
    this.formGroup = this.fb.group({
      'form': ['']
    })
    this.formGroup.get('form').valueChanges.pipe(debounceTime(500)).
      subscribe(response => {
        // console.log('data is ', response);
        if (response && response.length > 1) {
          this.filterData(response)
        } else {
          this.filteredOptions = []
        }

      })
  }
  filterData(enteredData) {
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  onClick(selectedOption) {
    
      this.eventservice.sendData(selectedOption);
    
  }
  onClickadd(i:string) {
    this.openDialog(i,this.treeData);
  }
  openDialog(i:string,treeData:bigdomain[]) {
    const dialogRef = this.dialog.open(ForumSearchComponent, {
      data: { i: i, treeData: treeData }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.dialogResult.emit(result);
    });
  }
  isAddoptionValid(): boolean {
    const formValue = this.formGroup.get('form').value.toLowerCase();
    return formValue.length > 1 && !this.filteredOptions.map(op => op.toLowerCase()).includes(formValue) && this.searchdata.addoption;
  }
}
