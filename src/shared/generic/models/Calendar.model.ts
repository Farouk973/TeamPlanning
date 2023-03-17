import {NXMGenericComponent} from "./NXMGenericComponent.model";

export interface Calendar extends NXMGenericComponent {
  endpoint : string,
  startDateCollumn : string,
  endDateCollumn : string,
  displaycollumn : string,
  eventColors? : string,
  editable? : boolean
}
