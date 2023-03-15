import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogContentComponent} from "../dialog-content/dialog-content.component";
import {CardDialogService} from "../card.dialog.service";
interface JsonFormCard {
      name:string
}
@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {
  cards: JsonFormCard[];
  @Input() endpoint: any;
  constructor(public dialog: MatDialog ,private cardDialogService : CardDialogService) {}

  openDialog(cards) {
    const dialogRef = this.dialog.open(DialogContentComponent , {
      data: {cards}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.cardDialogService.getGardData(this.endpoint).subscribe((data)=>{
      this.cards=data;
    })
  }

}
