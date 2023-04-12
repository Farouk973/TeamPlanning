import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, map, Observable, of } from 'rxjs';
import { Apiresponse, bigdomain, domain,  } from '../../models/bigdomain.model';
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
  @Input() Treedata: bigdomain[] = [];
  //@Input() Searchmodel!: Observable<searchmodel>;
  @Output() dialogResult = new EventEmitter<any>();
  options = [];
  //treeData: bigdomain[] = [];
  
  filteredOptions
  formGroup: FormGroup;
  chipadded: bigdomain;
  domains: any[] = [];
  constructor(private fb: FormBuilder, private http: HttpClient, private eventservice: servicechipsservice,private dialog: MatDialog) { }

  async ngOnInit() {
    console.log('Treedata:', this.Treedata);
    this.initForm();
    await this.waitForTreedata();
    console.log('Processed domains:', this.options); 
  }
  private async waitForTreedata() {
    return new Promise<void>(resolve => {
      const intervalId = setInterval(() => {
        if (this.Treedata.length) {
          clearInterval(intervalId);
          this.processTreedata();
          resolve();
        }
      }, 100);
    });
  }
  private processTreedata() {
    this.options = this.Treedata.flatMap(bigdomain =>
      bigdomain.subdomain.flatMap(subdomain =>
        subdomain.domain.map(domain => domain.name)
      )
    );
    
    of(this.options).subscribe(filteredOptions => {
      this.options = filteredOptions;
    });
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

///////////////////////////////////////////////////////////
  filterData(enteredData) {
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  onClick(selectedOption) {
    
      this.eventservice.sendData(selectedOption);
    
  }
  onClickadd(i:string) {
    this.openDialog(i,this.Treedata);
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
    return formValue.length > 1 && !this.filteredOptions.map(op => op.toLowerCase()).includes(formValue) ;
  }
}
