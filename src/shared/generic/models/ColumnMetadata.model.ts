import {NXMGenericComponent} from "./NXMGenericComponent.model";

export interface ColumnMetadata extends NXMGenericComponent {
  name: string;
  type: string;
  format: string;
  maxLength?: number;
  minLength?: number;
  minimum?: number;
  maximum?: number;
  references?: string[] | null;
  description?: string ;
}
