
import { Component, Input, OnInit,ChangeDetectorRef  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { servicechipsservice } from '../servicechips.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { bigdomain, domain, subdomain, endpoints } from '../../models/domain.model';
import { SkillRatingDialogComponent } from '../skill-rating-dialog/skill-rating-dialog.component';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { searchmodel } from '../../models/search.model';
import { MatSnackBar } from '@angular/material/snack-bar';


interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-chips-gc',
  templateUrl: './chips-gc.component.html',
  styleUrls: ['./chips-gc.component.css']
})
export class ChipsGCComponent implements OnInit {
  treeData: bigdomain[] = [];
  addedchips: domain[] = [];
  allchip: domain[] = [];
  searchValue: string = '';
  searchText: string;
  @Input() Endpoints!: Observable<endpoints>;
  public searchmodel: Observable<searchmodel>;
  receivedData: string;
  domainselected: any;
  namesubdomain: string;
  namedomain: string;



  constructor(private dialog: MatDialog, private servicechipsservice: servicechipsservice, private http: HttpClient,private snackBar: MatSnackBar,private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {

    this.searchmodel = this.http.get<searchmodel>('assets/SearchCG.json');
    this.Endpoints.subscribe((enpointData: any) => {
      this.namesubdomain = enpointData.subdomainname;
      this.namedomain = enpointData.domainname;
      this.servicechipsservice.getApiData(enpointData.Metadata).subscribe(data => {
        this.treeData = data.bigdomain;
        this.dataSource.data = this.treeData;
      });
    });
    this.servicechipsservice.getData().subscribe(data => {
      this.receivedData = data;
      this.domainselected = this.searchdomain(data);
      this.openDialog(this.domainselected);
      console.log('Received data:', this.domainselected.name);
    });

  }
  private _transformer = (node: bigdomain, level: number) => {
    return {
      expandable: !!node.subdomain && node.subdomain.length > 0,
      name: node.name,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,

  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.subdomain,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  filterTreeData() {
    let filteredData: bigdomain[] = [];
    for (const bigcategory of this.treeData) {
      const matchingCategories = bigcategory.subdomain!.filter((category: { name: string; }) => {
        const categoryName = category.name.toLowerCase();
        const searchValue = this.searchValue.toLowerCase();
        return categoryName.includes(searchValue);
      });
      if (matchingCategories.length > 0) {
        const filteredBigcategory = { ...bigcategory, categories: matchingCategories };
        filteredData.push(filteredBigcategory);
      }
    }
    this.dataSource.data = filteredData;
  }
  selectedNode: any;
  selectedchips: domain[] = [];
  onNodeClicked(node: any) {
    this.selectedNode = node.name;
    const clickedCategoryObj = this.treeData.find(category => category.subdomain!.some(subCategory => subCategory.name === this.selectedNode));
    const clickedSubcategoryObj = clickedCategoryObj?.subdomain?.find(subCategory => subCategory.name === this.selectedNode);
    const chips = clickedSubcategoryObj?.domain;
    this.selectedchips = chips || [];

  }
  searchdomain(data: string): domain | undefined {
    const category = this.treeData.find(category =>
      category.subdomain!.some(subCategory => subCategory.domain.find(d => d.name === data))
    );
    if (category) {
      const subCategory = category.subdomain!.find(subCategory =>
        subCategory.domain.find(d => d.name === data)
      );
      if (subCategory) {
        return subCategory.domain.find(d => d.name === data);
      }
    }
    return undefined;
  }
  openDialog(chips: domain) {
    const dialogRef = this.dialog.open(SkillRatingDialogComponent, {
      data: chips
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let isAlreadyAdded = this.addedchips.find(item => item.name === result.name);
        if (!isAlreadyAdded) {
          this.addedchips.push(result);
          this.cdr.detectChanges();
        }
        else if (isAlreadyAdded && isAlreadyAdded.rate !== result.rate) {
          const index = this.addedchips.findIndex(item => item.name === result.name);
          if (index !== -1) {
            this.addedchips.splice(index, 1); // remove existing item from array
          }
          this.addedchips.push(result);
          this.cdr.detectChanges();
        }
        else {
          this.snackBar.open('this ' +this.namedomain+ ' is already added', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        }
        console.log(this.addedchips);
        
      }
    });
  }
}



