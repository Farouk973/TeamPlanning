import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeaderIntl } from '@angular/material/sort';
@Component({
  selector: 'app-data-table-generic',
  templateUrl: './data-table-generic.component.html',
  styleUrls: ['./data-table-generic.component.css'],
  providers: [
    { provide: MatSortHeaderIntl, useClass: MatSortHeaderIntl }
  ]
 
})
export class DataTableGenericComponent implements OnInit {
  displayedColumns: string[] = ['column1', 'column2','column3','column4','column5'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // Set the number of items per page
  pageSize = 10;
  // Set the initial page number
  currentPage = 1;
  // Set the total number of items (this would be retrieved from the server)
  totalItems = 100;
  public paginationPages: number[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getData(1);
    this.generatePaginationPages();
    this.dataSource.sort = this.sort;
    
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  // Go to the next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      // Call your API with the new page number
      this.getData(this.currentPage);
    }
  }
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // Call your API with the new page number
      this.getData(this.currentPage);
    }
  }
  generatePaginationPages() {
    this.paginationPages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.paginationPages.push(i);
    }
  }
  // Go to the previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      // Call your API with the new page number
      this.getData(this.currentPage);
    }
  }
  getData(pageNb: number) {
    const endpoint = "https://localhost:5001/api/service";
    const params = new HttpParams().set('parameterValue', pageNb.toString());

    this.httpClient.get<any>(endpoint, { params }).subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
    });
  }
}
