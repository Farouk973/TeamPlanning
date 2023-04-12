import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { servicechipsservice } from '../servicechips.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Metadata, bigdomain, domain, subdomain } from '../../models/bigdomain.model';
import { Observable } from 'rxjs';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { SkillRatingDialogComponent } from '../skill-rating-dialog/skill-rating-dialog.component';


interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-domain-chips-gc',
  templateUrl: './domain-chips-gc.component.html',
  styleUrls: ['./domain-chips-gc.component.css']
})

export class DomainChipsGCComponent implements OnInit {
  endpoint = 'assets/back.json';

  constructor(private dialog: MatDialog, private servicechipsservice: servicechipsservice, private http: HttpClient, private snackBar: MatSnackBar, private cdr: ChangeDetectorRef) { }
  apiResponse = {};
  transformedResponse={};
  treedata: bigdomain[] = [];
  searchValue: string = '';
  domainselected: any;
  receivedData: string;
  addedchips: domain[] = [];

  async ngOnInit(): Promise<void> {
    //map keys from the endpoints and metdata
    const response = await this.http.get<Metadata[]>('assets/Metadata.json').toPromise();
    const metadata = response['Metadata'];
    for (const metadataItem of metadata) {
      const apiResponse = await this.http.get<any[]>(metadataItem.endpoint).toPromise();
      const transformedResponse = apiResponse.reduce((acc, curr) => {
        if (!acc[metadataItem.nameclassback]) {
          acc[metadataItem.nameclassback] = [];
        }
        acc[metadataItem.nameclassback].push(curr);
        return acc;
      }, {});
      
      console.log(transformedResponse);
      const mappedData = transformedResponse[metadataItem.nameclassback].map(data => {
        const mappedObj = {} as any;
        for (const key in metadataItem.mapping) {
          mappedObj[metadataItem.mapping[key]] = data[key];
        }
        return mappedObj;
      });
      this.transformedResponse[metadataItem.namemodel] = mappedData;
    }
    //console.log(this.apiResponse['bigdomain']);
    //faire une liste d'objet qui continent la treedata
    this.transformedResponse['bigdomain']?.forEach((bd) => {
      const subdomains = this.transformedResponse['subdomain']
        .filter((sd) => sd.bigdomain_id === bd.id)
        .map((sd) => {
          const domains = this.transformedResponse['domain']
            .filter((d) => d.subdomain_id === sd.id)
            .map((d) => ({ name: d.name, value: d.value }));
          return { id: sd.id, bigdomain_id: sd.bigdomain_id, name: sd.name, domain: domains };
        });
      this.treedata.push({ name: bd.name, subdomain: subdomains });
    });
    //console.log(this.treedata);
    this.dataSource.data = this.treedata;
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
    for (const bigcategory of this.treedata) {
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
    const clickedCategoryObj = this.treedata.find(category => category.subdomain!.some(subCategory => subCategory.name === this.selectedNode));
    const clickedSubcategoryObj = clickedCategoryObj?.subdomain?.find(subCategory => subCategory.name === this.selectedNode);
    const chips = clickedSubcategoryObj?.domain;
    this.selectedchips = chips || [];
  }
  searchdomain(data: string): domain | undefined {
    const category = this.treedata.find(category =>
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
        else if (isAlreadyAdded && isAlreadyAdded.value !== result.value) {
          const index = this.addedchips.findIndex(item => item.name === result.name);
          if (index !== -1) {
            this.addedchips.splice(index, 1); // remove existing item from array
          }
          this.addedchips.push(result);
          this.cdr.detectChanges();
        }
        else {
          this.snackBar.open('this skills is already added', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        }
        console.log(this.addedchips);

      }
    });

  }
  handleDialogResult(result: any) {
    console.log('Dialog result:', result);
    // if (this.treeData.includes(result.bigDomain)){

    //   const subdomain = result.subDomain;
    //   const bigdomain = result.bigDomain;
    //   const skillName = result.skillName;
      
    //   // find the subdomain and add the skill name to it
    //   for (let i = 0; i < this.treeData.length; i++) {
    //     if (this.treeData[i].name === bigdomain.name) {
    //       for (let j = 0; j < this.treeData[i].subdomain.length; j++) {
    //         if (this.treeData[i].subdomain[j].name === subdomain.name) {
    //           this.treeData[i].subdomain[j].domain.push({ name: skillName,rate:0 });
    //           break;
    //         }
    //       }
    //       break;
    //     }
    //   }
    // }
    // console.log(this.treeData)
    const bigDomainIndex = this.treedata.findIndex(d => d.name === result.bigDomain.name);

    if (bigDomainIndex !== -1) {
      // Find the index of the sub domain in the big domain's sub domain array
      const subDomainIndex = this.treedata[bigDomainIndex].subdomain.findIndex(d => d.name === result.subDomain.name);
  
      if (subDomainIndex !== -1) {
        // Check if the skill name is already in the domain array
        const skillExists = this.treedata[bigDomainIndex].subdomain[subDomainIndex].domain.some(d => d.name === result.skillName);
  
        if (!skillExists) {
          // Add the skill name to the domain array
          this.treedata[bigDomainIndex].subdomain[subDomainIndex].domain.push({ name: result.skillName,value:0 ,});
        }
      }
    }
    console.log(this.treedata)
  }
  isChipSelected(chipName: string): boolean {
    return this.addedchips.some(chip => chip.name === chipName);
  }
  removeChip(chip) {
    const index = this.addedchips.findIndex(c => c.name === chip.name);
    if (index !== -1) {
      this.addedchips.splice(index, 1);
    }
    console.log(this.addedchips);
  }

}


