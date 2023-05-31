import { Actionpanel } from "./ActionPanel.model";
import { Form } from "./Form.model";
import {NXMGenericComponent} from "./NXMGenericComponent.model";

export interface Calendar extends NXMGenericComponent {
  endpoint : string,
  updateendpoint : string,
  startDateCollumn : string,
  endDateCollumn : string,
  displaycollumn : string,
  eventColors? : string,
  editable? : boolean
}



export interface CalendarDetails extends NXMGenericComponent {
  title?: string
  endpoint : string,
  displaycollumn : string,
  statusColum : string,
  styleCard : number,
  actionPannel? : Actionpanel,
  addForm? : Form,
}

export interface TimeLine extends NXMGenericComponent {
  endpoint : string,
  startDateCollumn : string,
  endDateCollumn : string,
  displaycollumn : string,
  dialog? :TimeDialog
}

export interface TimeDialog extends NXMGenericComponent {
  endpoint : string,
  metaData : string,
} 
