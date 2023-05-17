import {NXMGenericComponent} from "./NXMGenericComponent.model";

export interface Kanban extends NXMGenericComponent {
  endpoint: string;
  enumeration: string;
  desiredEnum: string;
  updateEndpoint: string;
}


export interface Kanbanbord extends NXMGenericComponent {
  endpoint : string,
  displaycollumn : string,
  descriptioncollumn : string,
  endpointList?: string,
  displayListcollumn ?: string,
  descriptionListcollumn ?: string,
}
