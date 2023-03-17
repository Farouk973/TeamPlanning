
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { servicechipsservice } from '../servicechips.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { bigdomain, domain, endpoints } from '../../models/domain.model';
import { SkillRatingDialogComponent } from '../skill-rating-dialog/skill-rating-dialog.component';


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
  Endpoints:endpoints = {endpointsave:"",Metadata: ""} ;
  treeData: bigdomain[] = [];
  allchip: domain[] = [];
  searchValue: string = '';


constructor(private dialog: MatDialog,private servicechipsservice: servicechipsservice) {}
  ngOnInit(): void {
    this.servicechipsservice.getEndpoints().subscribe(endpoints => {
        this.Endpoints = endpoints;
        console.log(this.Endpoints);
        this.servicechipsservice.getApiData(this.Endpoints.Metadata).subscribe(data => {
          this.treeData = data.bigdomain;
          this.dataSource.data = this.treeData;
    });
        })
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
  openDialog(chips: domain) {
    const dialogRef = this.dialog.open(SkillRatingDialogComponent, {
      data: chips
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  }
  


