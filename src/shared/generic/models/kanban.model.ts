import {NXMGenericComponent} from "./NXMGenericComponent.model";

export interface Kanban extends NXMGenericComponent {
  endpoint: string;
  enumeration: string;
  desiredEnum: string;
  updateEndpoint: string;
}
