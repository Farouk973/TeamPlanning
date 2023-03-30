import { Component, Input, OnInit, VERSION } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { SharedServices } from '../../SharedServices.service';
import { SelectOrder } from '../../models/SelectOrder.model';


interface idselect {
  id: string;

}

export class Board {
  constructor(public name: string, public columns: Column[]) {}
}

export class Column {
  constructor(public name: string, public tasks: any[]) {}
}



@Component({
  selector: 'app-order-select',
  templateUrl: './order-select.component.html',
  styleUrls: ['./order-select.component.css']
})
export class OrderSelectComponent implements OnInit  {



  list! : any[];
  updateSubscription: Subscription;



  constructor(private sharedService: SharedServices){}
  @Input() select : SelectOrder;

    public board: Board = new Board('Test Board', [
      new Column("this.select.InterfaceName", this.list),
    ]);

  public ngOnInit(): void {
    this.getTasksData();
  }

  getTasksData() {
    this.board.columns[0].name = this.select.InterfaceName, this.list;
    this.sharedService
      .getData(this.select.endpointData)
      .subscribe({
        next: (data) => {
          this.board.columns[0].tasks = data ;
        },
      })
  }

  updateOrder(id: string  ,currentIndex : string,previousIndex : string ) {
    this.sharedService
      .updateRow(this.select.endpointAction+'/'+id+'/'+previousIndex+'/'+currentIndex,null)
      .subscribe({
      })
  }
  public dropGrid(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      const idselct = event.container.data[event.currentIndex] as unknown as idselect;
      this.updateOrder(idselct.id ,event.previousIndex.toString(),event.currentIndex.toString() )

        } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);    
    }
  }


}
