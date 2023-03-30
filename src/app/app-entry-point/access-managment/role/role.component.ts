import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, tap, switchMap, finalize, distinctUntilChanged, filter } from 'rxjs/operators';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { CardGridView } from 'src/shared/generic/models/CardView.model';
import { Form } from 'src/shared/generic/models/Form.model';
import { DialogComponent } from 'src/shared/generic/nxm-dialog/dialog/dialog.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(public dialog: MatDialog,   private http: HttpClient) { }

  // ngOnInit(): void {
  // }
  // action: Actionpanel = {
  //   endpoint: 'https://localhost:44312/api/Users',
  //   formEditData: 'https://localhost:44312/meta/UpdateUserRoleEtPermessionsCommand',
  // };

  forms: Form = {
             endpoint: 'https://localhost:44312/api/Role',
             
             metaData: 'https://localhost:44312/meta/CreateRoleCommand', };

  card: CardGridView = {
    endpoint: 'https://localhost:44312/api/Role',
    formdata: 'https://localhost:44312/meta/CreateRoleCommand',
    metadata: 'https://localhost:44312/meta/GetRoleListVm',
    cardtitle: "title",
    carddescription: "description",
    width: 300,
    height: 150,
    actionPanel: null,
  };


  openDialog(metaData: any, isUpdate: boolean, endpoint: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1067px',
      height: '519px',
      data: { metaData, isUpdate, endpoint },
      

    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  searchDataCtrl = new FormControl();
  filteredData: any;
  isLoading = false;
  errorMsg!: string;
  minLengthTerm = 3;
  selectedMovieData: any = "";
  onSelected() {
    console.log(this.selectedMovieData);
    this.selectedMovieData = this.selectedMovieData;
  }

  displayWith(value: any) {
    return value?.title;
  }

  clearSelection() {
    this.selectedMovieData = "";
    this.filteredData = [];
  }

  ngOnInit() {
    this.searchDataCtrl.valueChanges
      .pipe(
        filter(res => {
          return res !== null && res.length >= this.minLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(1000),
        tap(() => {
          this.errorMsg = "";
          this.filteredData = [];
          this.isLoading = true;
        }),
        switchMap(value => this.http.get('https://localhost:44312/api/Role/' + value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe((data: any) => {
        if (data == null) {
          this.errorMsg = data['Error'];
          this.filteredData = [];
        } else {
          this.errorMsg = "";
          this.filteredData = data;
        }
        console.log(this.filteredData);
      });
  }
}
